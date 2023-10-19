<?php

use Castoware\Database;
use Castoware\Request;
use Castoware\Util;

header("Access-Control-Allow-Origin: *");

ini_set("error_log", __DIR__ . '/error.log');

require_once("vendor/autoload.php");
$router = new AltoRouter();
$util = new Util;
$request = new Request;
$db = (new Database)->db;

require_once(__DIR__ . '/methods/index.php');

$router->addRoutes([
  ['get', '/api/get-items/[:table]/[:sortBy]/[:sortDir]', 'getItems'],
  ['get', '/api/verify-token', 'verify-token'], // placeholder, no actual function
  ['post', '/api/delete-rec', 'deleteRec'],
  ['post', '/api/send-contact', 'sendContact'],
  ['post', '/api/sign-in', 'signIn'],
  ['post', '/api/update-pages', 'updatePages'],
  ['post', '/api/upload-image/[:auth]/[:table]/[:id]', 'uploadImage'],
  ['post', '/api/upload-photos/[:auth]', 'uploadPhotos'],
  ['post', '/api/upsert-rec', 'upsertRec']
]);

$match = $router->match();

if (is_array($match)) {
  if ($request->auth && $match['target'] == 'verify-token') {
    if (!$util->getUser('token', $request->auth)) $util->fail("Invalid Authorization");
    return;
  }

  if (!is_callable($match['target'])) {
    header($_SERVER["SERVER_PROTOCOL"] . ' 404 Not Found');
    return;
  }

  $request->params = (object) $match['params'];
  call_user_func_array(
    $match['target'],
    [
      'db' => $db,
      'request' => $request,
      'util' => $util,
    ]
  );
} else {
  // no route was matched
  header($_SERVER["SERVER_PROTOCOL"] . ' 404 Not Found');
}
