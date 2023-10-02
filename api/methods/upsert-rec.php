<?php

use Jawira\CaseConverter\Convert;

require_once(dirname(__DIR__) . '/vendor/autoload.php');

function upsertRec($db, $request, $util)
{
  if (in_array($request->body->table, ['events', 'photos'])) {
    $c = new Convert($request->body->rec->name);
    $imgName = $c->toKebab() . "-" . uniqid();

    $table = $request->body->table;

    $imageID = isset($request->body->rec->temp_id) ? $request->body->rec->temp_id : $request->body->rec->id;

    $tmpFiles = glob(sys_get_temp_dir() . "/*$table-$imageID*");

    if (count($tmpFiles) > 0) {
      // get most recent
      sort($tmpFiles);
      $fromFile = array_pop($tmpFiles);
      $toPath = "/site-media/" . $request->body->table;
      $toFilename = "$imgName." . pathinfo($fromFile, PATHINFO_EXTENSION);
      $toFile = dirname(__DIR__, 2) . "$toPath/$toFilename";

      // copy to proper path
      copy($fromFile, $toFile);

      // update file_location in rec
      $request->body->rec->file_location = str_replace($_SERVER['DOCUMENT_ROOT'], '', $toFile);
    }
  }

  unset($request->body->rec->temp_id);

  $cols = $db->fetchAll("SHOW COLUMNS IN %n", $request->body->table);
  $cols = array_map(function ($col) {
    return $col->Field;
  }, $cols);
  $rec = (array) $request->body->rec;
  foreach (array_keys($rec) as $field) {
    if (!in_array($field, $cols)) unset($rec[$field]);
  }

  try {
    $db->query("INSERT INTO %n %v ON DUPLICATE KEY UPDATE %a", $request->body->table, $rec, $rec);

    $util->success();
  } catch (Exception $e) {
    $util->fail($e->getMessage());
  }
}
