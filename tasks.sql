-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-11-2024 a las 05:38:37
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `taskmanager`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tasks`
--

CREATE TABLE `tasks` (
  `ID` int(11) NOT NULL,
  `Titulo` varchar(255) NOT NULL,
  `Descripcion` text DEFAULT NULL,
  `Estado` enum('Pendiente','En Proceso','Completada') DEFAULT 'Pendiente',
  `FechaCreacion` timestamp NOT NULL DEFAULT current_timestamp(),
  `FechaActualizacion` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tasks`
--

INSERT INTO `tasks` (`ID`, `Titulo`, `Descripcion`, `Estado`, `FechaCreacion`, `FechaActualizacion`) VALUES
(5, '', NULL, NULL, '2024-11-28 16:41:21', '2024-11-29 03:50:30'),
(6, 'Nueva tarea de prueba 6', 'Descripción actualizada', '', '2024-11-28 21:03:53', '2024-11-28 21:03:53'),
(7, 'Nueva tarea de prueba 7', 'Descripción actualizada', '', '2024-11-28 21:04:17', '2024-11-28 21:04:17'),
(9, 'Nueva tarea de prueba 9', 'Descripción actualizada', '', '2024-11-29 01:25:09', '2024-11-29 01:25:09'),
(10, 'Nueva tarea de prueba 10', 'Descripción actualizada', '', '2024-11-29 02:17:58', '2024-11-29 02:17:58'),
(12, 'Nueva tarea de prueba 13', 'Descripción actualizada', '', '2024-11-29 03:52:16', '2024-11-29 03:52:16'),
(13, 'Nueva tarea de prueba 14', 'Descripción actualizada', '', '2024-11-29 03:52:37', '2024-11-29 03:52:37');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tasks`
--
ALTER TABLE `tasks`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
