<?php
function getItems($db, $request, $util)
{
  try {
    $items = $db->fetchAll("SELECT * FROM %n ORDER BY %by", $request->params->table, $request->params->sortBy, $request->params->sortDir);

    if ($request->params->table == 'albums') {
      $items = array_map(function ($item) {
        if (gettype($item->photos) != 'array') $item->photos = json_decode($item->photos);
        return $item;
      }, $items);
    }

    $items = array_map(function ($item) {
      if (isset($item->file_location)) {
        $item->mime = mime_content_type($_SERVER['DOCUMENT_ROOT'] . $item->file_location);
      }

      return $item;
    }, $items);

    $util->success($items, true);
  } catch (Exception $e) {
    $util->fail($e->getMessage());
  }
}
