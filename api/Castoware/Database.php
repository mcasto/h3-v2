<?php

namespace Castoware;

use Dibi\Connection;

class Database
{
  public $db;

  function __construct()
  {
    /* MySQL */
    $username = "u466389499_h3_v2";
    $password = "9FS$.U=PtSC;Y2;9z^3M";
    $dbName = "u466389499_h3_v2";
    $databaseConnection = $this->connectMysql($username, $password, $dbName);

    /* SQLite */
    // $dbFile = dirname(__DIR__) . '/database.db';
    // $databaseConnection = $this->connectSqlite($dbFile);

    $this->db = isset($databaseConnection) ? new Connection($databaseConnection) : false;
  }

  function connectSqlite($dbFile)
  {
    return [
      'driver' => 'sqlite',
      'database' => $dbFile
    ];
  }

  function connectMysql($username, $password, $dbName)
  {
    return [
      'driver'   => 'mysqli',
      'host'     => '127.0.0.1',
      'username' => $username,
      'password' => $password,
      'database' => $dbName,
      // 'profiler' => ['file' => __DIR__ . '/sql.log']
    ];
  }
}
