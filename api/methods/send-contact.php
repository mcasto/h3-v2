<?php

use Castoware\Sendgrid;

function sendContact($db, $request, $util)
{
  $sg = new Sendgrid();

  try {
    $rec = (array) $request->body;
    $rec['date'] = date("Y-m-d");
    $db->query("INSERT INTO contacts %v", $rec);
    $id = $db->getInsertId();

    $users = $db->fetchAll("SELECT `name`,email FROM admin_users WHERE notify=1");
    $status = [];
    foreach ($users as $user) {
      $status[] = $sg->sendEmail($rec['email'], $rec['name'], $user->email, $user->name, $rec['subject'], $rec['body']);
    }
    $db->query("UPDATE contacts SET send_status=? WHERE id=?", json_encode($status, JSON_PRETTY_PRINT), $id);

    $util->success($request->body);
  } catch (Exception $e) {
    $util->fail($e->getMessage());
  }
}
