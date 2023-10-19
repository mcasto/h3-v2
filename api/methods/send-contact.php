<?php
function sendContact($db, $request, $util)
{
  try {
    $rec = (array) $request->body;
    $rec['date'] = date("Y-m-d");
    $db->query("INSERT INTO contacts %v", $rec);

    // mc-todo: send email via sendgrid

    $util->success($request->body);
  } catch (Exception $e) {
    $util->fail($e->getMessage());
  }
}
