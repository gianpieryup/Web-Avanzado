-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-12-2019 a las 19:27:37
-- Versión del servidor: 10.4.6-MariaDB
-- Versión de PHP: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tpelearning`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cursos`
--

CREATE TABLE `cursos` (
  `id_curso` int(11) NOT NULL,
  `descripcion` varchar(255) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `cursos`
--

INSERT INTO `cursos` (`id_curso`, `descripcion`) VALUES
(1, 'Matematica'),
(2, 'Programacion');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posts`
--

CREATE TABLE `posts` (
  `id_post` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_curso` int(11) NOT NULL,
  `enunciado_ejercicio` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `solucion` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `id_usuario_solucion` int(11) NOT NULL,
  `sol_alternativa` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `id_usuario_sol_alternativa` int(11) NOT NULL,
  `likes` int(11) NOT NULL DEFAULT 0,
  `dislikes` int(11) NOT NULL DEFAULT 0,
  `fecha_post` date NOT NULL,
  `estado` smallint(6) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `soluciones_compradas`
--

CREATE TABLE `soluciones_compradas` (
  `id_usuario` int(11) NOT NULL,
  `id_posts` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nombre_usuario` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `mail_usuario` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `permisos_usuario` smallint(6) NOT NULL DEFAULT 0,
  `password_usuario` varchar(150) COLLATE utf8_spanish_ci NOT NULL,
  `cuenta_confirmada` tinyint(1) NOT NULL DEFAULT 0,
  `telefono_usuario` int(11) NOT NULL,
  `salvavidas` int(11) NOT NULL DEFAULT 0,
  `codigo_mail_usuario` varchar(255) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre_usuario`, `mail_usuario`, `permisos_usuario`, `password_usuario`, `cuenta_confirmada`, `telefono_usuario`, `salvavidas`, `codigo_mail_usuario`) VALUES
(3, 'Gianpier', 'admin@gmail.com', 0, '08d6c05a21512a79a1dfeb9d2a8f262f', 0, 1123953136, 0, '2941aa63-31c9-4b42-8400-8fe6bcf3a7bf'),
(4, 'Gianpier Yupanqui', 'gyupanquisalvatierra@gmail.com', 0, '08d6c05a21512a79a1dfeb9d2a8f262f', 0, 1123953136, 0, 'b653a4d8-ee8f-42f6-a726-47ecab190867');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cursos`
--
ALTER TABLE `cursos`
  ADD PRIMARY KEY (`id_curso`);

--
-- Indices de la tabla `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id_post`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_curso` (`id_curso`);

--
-- Indices de la tabla `soluciones_compradas`
--
ALTER TABLE `soluciones_compradas`
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_posts` (`id_posts`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cursos`
--
ALTER TABLE `cursos`
  MODIFY `id_curso` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `posts`
--
ALTER TABLE `posts`
  MODIFY `id_post` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`),
  ADD CONSTRAINT `posts_ibfk_3` FOREIGN KEY (`id_curso`) REFERENCES `cursos` (`id_curso`);

--
-- Filtros para la tabla `soluciones_compradas`
--
ALTER TABLE `soluciones_compradas`
  ADD CONSTRAINT `soluciones_compradas_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`),
  ADD CONSTRAINT `soluciones_compradas_ibfk_3` FOREIGN KEY (`id_posts`) REFERENCES `posts` (`id_post`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
