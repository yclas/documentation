<?php
// PHP built-in server router for shoot.mjs: serves the local test site (SHOTS_HOST) at SHOTS_BASE
// (http://localhost:<port>), rewriting the site's own address in pages and redirects so every link stays local.
$host = getenv('SHOTS_HOST');
$here = getenv('SHOTS_BASE');
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
if ($path !== '/' AND is_file($_SERVER['DOCUMENT_ROOT'].$path))
    return FALSE;

$_SERVER['HTTP_HOST'] = $_SERVER['SERVER_NAME'] = $host;
foreach (['HTTP_ORIGIN', 'HTTP_REFERER'] as $k)
    if (isset($_SERVER[$k]))
        $_SERVER[$k] = str_replace($here, 'http://'.$host, $_SERVER[$k]);

$swap = function ($s) use ($host, $here) {
    return str_replace(['http://'.$host, 'https://'.$host, 'http:\/\/'.$host, 'https:\/\/'.$host],
        [$here, $here, str_replace('/', '\/', $here), str_replace('/', '\/', $here)], $s);
};
ob_start($swap);
header_register_callback(function () use ($swap) {
    foreach (headers_list() as $h)
        if (stripos($h, 'Location:') === 0)
            header($swap($h));
});
$_SERVER['SCRIPT_NAME'] = '/index.php';
chdir($_SERVER['DOCUMENT_ROOT']);
require $_SERVER['DOCUMENT_ROOT'].'/index.php';
