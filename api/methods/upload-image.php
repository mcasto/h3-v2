<?php
function uploadImage($db, $request, $util)
{
  $user = $util->getUser('token', $request->params->auth);
  if (!$user) $util->fail("Invalid Token");

  $files = (array) $request->files;
  $file = array_shift($files);
  $table = $request->params->table;
  $id = $request->params->id;
  $uid = uniqid();
  $extension = pathinfo($file['full_path'], PATHINFO_EXTENSION);
  $filename = "$table-$id-$uid.$extension";
  move_uploaded_file($file['tmp_name'], sys_get_temp_dir() . "/$filename");
}
