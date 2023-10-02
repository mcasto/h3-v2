<?php
function signIn($db, $request, $util)
{
  $user = $util->getUser('email', $request->body->email);
  if (!$user) $util->fail("Invalid E-Mail");

  if (!password_verify($request->body->password, $user->pass_hash)) $util->fail("Invalid Password");

  $token = $util->generateToken();
  $db->query("UPDATE admin_users SET %a WHERE id=?", [
    'token' => $token
  ], $user->id);

  $util->success(['token' => $token]);
}
