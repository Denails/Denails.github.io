<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Calendar</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 10px;
            text-align: center;
        }
        th {
            background-color: #f4f4f4;
        }
        .today {
            background-color: #ff0;
        }
    </style>
</head>
<body>
    <?php
    $month = isset($_GET['month']) ? $_GET['month'] : date('m');
    $year = isset($_GET['year']) ? $_GET['year'] : date('Y');

    $firstDay = strtotime("$year-$month-01");
    $daysInMonth = date('t', $firstDay);
    $dayOfWeek = date('w', $firstDay);

    echo "<h1>" . date('F Y', $firstDay) . "</h1>";
    echo "<a href='?month=" . ($month - 1) . "&year=$year'>&lt; Prev</a> ";
    echo "<a href='?month=" . ($month + 1) . "&year=$year'>Next &gt;</a>";

    echo "<table><tr>";
    echo "<th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr><tr>";

    for ($i = 0; $i < $dayOfWeek; $i++) {
        echo "<td></td>";
    }

    for ($day = 1; $day <= $daysInMonth; $day++) {
        $isToday = ($day == date('j') && $month == date('m') && $year == date('Y'));
        echo "<td class='" . ($isToday ? "today" : "") . "'>$day</td>";
        if (($dayOfWeek + $day) % 7 == 0) {
            echo "</tr><tr>";
        }
    }

    echo "</tr></table>";
    ?>
</body>
</html>