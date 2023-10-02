<?php
function deleteRec($db, $request, $util)
{
  if (!isset($request->body->item->id)) $util->success();

  try {
    $rec = $db->fetch("SELECT * FROM %n WHERE id=?", $request->body->table, $request->body->item->id);

    if (isset($rec->file_location)) {
      unlink($_SERVER['DOCUMENT_ROOT'] . $rec->file_location);
    }

    $db->query("DELETE FROM %n WHERE id=?", $request->body->table, $request->body->item->id);

    $util->success();
  } catch (Exception $e) {
    $util->fail($e->getMessage());
  }
}
