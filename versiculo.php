<?php

/**
 * Snippet para avatares de WordPress aleatorios en base a un array de 
 * imágenes.
 *
 * Se asume que éstas están en ./wp-content/uploads/avatares/.
 *
 * Este código puede añadirse a un "functions.php" o a cualquier plugin 
 * personalizado.
 */
 
add_filter( 'avatar_defaults', 'dame_avatar_aleatorio' );
 
function dame_avatar_aleatorio ( $avatares )
{
    /**
     * Array de avatares disponibles.
     *
     * En este caso usamos un array, pero podríamos usar cualquier método
     * dinámico para poblarlo: una API remota, leer ficheros de un directorio,
     * etc.
     * 
     * @var array
     */
    $imagen = array_rand(array_flip([
        'perro.jpg',
        'gato.jpg',
        'pez.jpg',
        'puercoespin.jpg',
        'tiranosaurio.jpg'
    ]));

    /**
     * La URL raíz que alberga los ficheros.
     *
     * En este ejemplo usamos: 
     * http://tld.com/wp-content/uploads/avatares/
     * 
     * @var string
     */
    $baseUrl  = wp_upload_dir()['url'] . '/avatares/';

    /** 
     * Añadimos el nuevo avatar y devolvemos
     */
    $avatares[$baseUrl . $imagen] = 'Avatar aleatorio';
    return $avatares;
}