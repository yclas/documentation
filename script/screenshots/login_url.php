<?php
// A signed one-time admin login for the local test site (yclas.com's own "Open admin" link), pointed at the
// local server.   php login_url.php <yclas.com checkout> <id_domain> <http://localhost:port> [redirect path]
list(, $repo, $id_domain, $base) = $argv;
require $repo.'/tests/page-builder/bootstrap.php';
builder_test_boot('yclas');

$domain = new Model_Domain($id_domain);
$m = new ReflectionMethod('Model_Domain', 'remote_url');
$m->setAccessible(TRUE);
$url = $m->invoke($domain, 'login', ['redirect' => isset($argv[4]) ? $argv[4] : '/oc-panel'], 600);
echo preg_replace('#^https?://[^/]+#', $base, $url)."\n";
