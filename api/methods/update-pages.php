<?php
function updatePages($db, $request, $util)
{
  foreach ($request->body as $rec) {
    if (isset($rec->id)) {
      $db->query("UPDATE pages SET %a WHERE id=?", (array) $rec, $rec->id);
      continue;
    }

    $db->query("INSERT INTO pages %v", (array) $rec);
  }

  $util->success();
}
