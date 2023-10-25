<?php
function deleteRecs($db, $request, $util)
{
  if (!isset($request->body->items)) $util->success();
  $idList = array_map(function ($item) {
    return $item->id;
  }, $request->body->items);

  try {
    $recs = $db->fetch("SELECT * FROM %n WHERE id IN %in", $request->body->table, $idList);

    foreach ($recs as $rec) {
      if (isset($rec->file_location)) {
        unlink($_SERVER['DOCUMENT_ROOT'] . $rec->file_location);
      }
    }

    $db->query("DELETE FROM %n WHERE id IN %in", $request->body->table, $idList);

    $util->success();
  } catch (Exception $e) {
    $util->fail($e->getMessage());
  }
}
