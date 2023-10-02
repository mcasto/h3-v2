<?php
function uploadPhotos($db, $request, $util)
{
  $user = $util->getUser('token', $request->params->auth);
  if (!$user) $util->fail("Invalid Token");

  $files = (array) $request->files;

  $path = "/site-media/photos";
  foreach ($files as $file) {
    $ext = pathinfo($file['full_path'], PATHINFO_EXTENSION);
    $filename = $path . "/" . uniqid() . ".$ext";
    $target = $_SERVER['DOCUMENT_ROOT'] . $filename;
    move_uploaded_file($file['tmp_name'], $target);
    $rec = [
      'file_location' => $filename,
      'name' => 'Untitled Photo',
      'date_added' => date("Y-m-d")
    ];
    $db->query("INSERT INTO photos %v", $rec);
  }
}
