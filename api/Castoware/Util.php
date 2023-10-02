<?php

namespace Castoware;

use Ramsey\Uuid\Nonstandard\Uuid;

class Util
{
  function compress($str)
  {
    return base64_encode(gzdeflate($str, 9));
  }

  function decompress($str)
  {
    return gzinflate(base64_decode($str));
  }

  function success($data = [], $compress = false)
  {
    $data = $compress ? $this->compress(json_encode($data)) : json_encode($data);

    exit(json_encode([
      'status' => 'ok',
      'data' => $data,
      'compressed' => $compress
    ]));
  }

  function fail($message)
  {
    die(json_encode(['status' => 'error', 'message' => $message]));
  }

  function generateToken()
  {
    return Uuid::uuid7()->toString();
  }

  function getUser($field, $string)
  {
    $db = (new Database)->db;
    return $db->fetch("SELECT * FROM admin_users WHERE %n=?", $field, $string);
  }
}
