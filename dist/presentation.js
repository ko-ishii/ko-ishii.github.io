function loadPresentation() {
    page = 'presentation';
    loadSidebar();
    if (lang === 'en') {
        document.getElementById('main').innerHTML = "<div>\n        <h2>Presentation</h2>\n        <h3>Oral (Domestic)</h3>\n        <ol reversed>\n        <li>\n        <u>Kohei Ishii</u>, Jun Haruyama, Osamu Sugino,\n        <br>\n        \"Evaluating the Importance of Second-Order Electron-Phonon Interactions in the Empty Lattice Model\" (in Japanese),\n        <br>\n        2024 Annual (79th) Meeting, The Physical Society of Japan.\n        <br>\n        (September 16th, 2024, Sapporo Campus, Hokkaido University)\n        </li>\n        <li>\n        <u>Kohei Ishii</u>, Jun Haruyama, Osamu Sugino,\n        <br>\n        \"First-principles calculations of band gaps incorporating electron-phonon interactions to infinite order\" (in Japanese),\n        <br>\n        Autumn Meeting 2022, The Physical Society of Japan. \n        <br>\n        (September 12th, 2022, Ookayama Campus, Tokyo Institute of Technology)\n        </li>\n        <li>\n        <u>Kohei Ishii</u>, Jun Haruyama, Osamu Sugino,\n        <br>\n        \"Development of first-principles calculation methods incorporating higher-order electron-phonon interactions\" (in Japanese),\n        <br>\n        2022 Annual (77th) Meeting, The Physical Society of Japan.\n        <br>\n        (March 16th, 2022, Online)\n        </li>\n        <li>\n        <u>Kohei Ishii</u>, Jun Haruyama, Osamu Sugino,\n        <br>\n        \"First-principles calculation of band gap correction of semiconductors by electron-phonon interactions\" (in Japanese),\n        <br>\n        Autumn Meeting 2020, The Physical Society of Japan.\n        <br>\n        (September 10th, 2020, Online)\n        </li>\n        </ol>\n        <h3>Poster (Domestic)</h3>\n        <ol reversed>\n        <li>\n        <u>Kohei Ishii</u>, Jun Haruyama, Osamu Sugino,\n        <br>\n        \"Allen-Heine-Cardona\u7406\u8AD6\u306E\u62E1\u5F35\u3068\u30D0\u30F3\u30C9\u30AE\u30E3\u30C3\u30D7\u88DC\u6B63\u3078\u306E\u9069\u7528\",\n        <br>\n        \u7269\u6027\u7814\u7A76\u6240\u30B9\u30D1\u30B3\u30F3\u5171\u540C\u5229\u7528\u30FBCCMS\u5408\u540C\u7814\u7A76\u4F1A\u300C\u8A08\u7B97\u7269\u8CEA\u79D1\u5B66\u306E\u65B0\u5C55\u958B\u300D,\n        <br>\n        (May 12th, 2022, Online)\n        </li>\n        <li>\n        <u>Kohei Ishii</u>, Jun Haruyama, Osamu Sugino,\n        <br>\n        \"Development of first-principles methods for the incorporation of electron-multiphonon interactions\" (in Japanese),\n        <br>\n        Autumn Meeting 2021, The Physical Society of Japan.\n        <br>\n        (September 21st, 2021, Online)\n        </li>\n        <li>\n        <u>Kohei Ishii</u>, Jun Haruyama, Osamu Sugino,\n        <br>\n        \"\u96FB\u5B50\u30FB\u30D5\u30A9\u30CE\u30F3\u76F8\u4E92\u4F5C\u7528\u306B\u3088\u308B\u30D0\u30F3\u30C9\u30AE\u30E3\u30C3\u30D7\u88DC\u6B63\u306B\u304A\u3051\u308B\u9078\u629E\u5247\",\n        <br>\n        \u7269\u6027\u7814\u7A76\u6240\u30B9\u30D1\u30B3\u30F3\u5171\u540C\u5229\u7528\u30FBCCMS\u5408\u540C\u7814\u7A76\u4F1A\u300C\u8A08\u7B97\u7269\u8CEA\u79D1\u5B66\u306E\u65B0\u5C55\u958B2020\u300D,\n        <br>\n        (December 21st, 2020, Online)\n        </li>\n        <li>\n        <u>Kohei Ishii</u>, Yoshifumi Noguchi, and Osamu Sugino,\n        <br>\n        \"Self-consistent GW+BSE calculation on small molecules\",\n        <br>\n        The International Summer WorkShop 2018 on First-Principles Electronic Structure Calculations in ISSP.\n        <br>\n        (July 11th, 2018, The Institute for Solid State Physics, The University of Tokyo)\n        </li>\n        </ol>\n        </div>";
    }
    else if (lang === 'ja') {
        document.getElementById('main').innerHTML = "<div>\n        <h2>\u8B1B\u6F14</h2>\n        <h3>\u53E3\u982D\uFF08\u56FD\u5185\uFF09</h3>\n        <ol reversed>\n        <li>\n        <u>\u77F3\u4E95\u6D69\u5E73</u>, \u6625\u5C71\u6F64, \u6749\u91CE\u4FEE,\n        <br>\n        \"\u7A7A\u683C\u5B50\u6A21\u578B\u306B\u304A\u3051\u308B\u4E8C\u6B21\u306E\u96FB\u5B50\u30FB\u30D5\u30A9\u30CE\u30F3\u76F8\u4E92\u4F5C\u7528\u306E\u91CD\u8981\u6027\u306E\u8A55\u4FA1\",\n        <br>\n        \u65E5\u672C\u7269\u7406\u5B66\u4F1A\u7B2C79\u56DE\u5E74\u6B21\u5927\u4F1A.\n        <br>\n        \uFF082024\u5E749\u670816\u65E5, \u5317\u6D77\u9053\u5927\u5B66\u672D\u5E4C\u30AD\u30E3\u30F3\u30D1\u30B9\uFF09\n        </li>\n        <li>\n        <u>\u77F3\u4E95\u6D69\u5E73</u>, \u6625\u5C71\u6F64, \u6749\u91CE\u4FEE,\n        <br>\n        \"\u96FB\u5B50\u30FB\u30D5\u30A9\u30CE\u30F3\u76F8\u4E92\u4F5C\u7528\u3092\u7121\u9650\u6B21\u307E\u3067\u53D6\u308A\u8FBC\u3093\u3060\u30D0\u30F3\u30C9\u30AE\u30E3\u30C3\u30D7\u306E\u7B2C\u4E00\u539F\u7406\u8A08\u7B97\",\n        <br>\n        \u65E5\u672C\u7269\u7406\u5B66\u4F1A2022\u5E74\u79CB\u5B63\u5927\u4F1A.\n        <br>\n        \uFF082022\u5E749\u670812\u65E5, \u6771\u4EAC\u5DE5\u696D\u5927\u5B66\u5927\u5CA1\u5C71\u30AD\u30E3\u30F3\u30D1\u30B9\uFF09\n        </li>\n        <li>\n        <u>\u77F3\u4E95\u6D69\u5E73</u>, \u6625\u5C71\u6F64, \u6749\u91CE\u4FEE,\n        <br>\n        \"\u9AD8\u6B21\u306E\u96FB\u5B50\u30FB\u30D5\u30A9\u30CE\u30F3\u76F8\u4E92\u4F5C\u7528\u3092\u53D6\u308A\u8FBC\u3093\u3060\u7B2C\u4E00\u539F\u7406\u8A08\u7B97\u624B\u6CD5\u306E\u958B\u767A\",\n        <br>\n        \u65E5\u672C\u7269\u7406\u5B66\u4F1A\u7B2C77\u56DE\u5E74\u6B21\u5927\u4F1A.\n        <br>\n        \uFF082022\u5E743\u670816\u65E5, \u30AA\u30F3\u30E9\u30A4\u30F3\uFF09\n        </li>\n        <li>\n        <u>\u77F3\u4E95\u6D69\u5E73</u>, \u6625\u5C71\u6F64, \u6749\u91CE\u4FEE,\n        <br>\n        \"\u96FB\u5B50\u30FB\u30D5\u30A9\u30CE\u30F3\u76F8\u4E92\u4F5C\u7528\u306B\u3088\u308B\u534A\u5C0E\u4F53\u306E\u30D0\u30F3\u30C9\u30AE\u30E3\u30C3\u30D7\u88DC\u6B63\u306E\u7B2C\u4E00\u539F\u7406\u8A08\u7B97\",\n        <br>\n        \u65E5\u672C\u7269\u7406\u5B66\u4F1A2020\u5E74\u79CB\u5B63\u5927\u4F1A.\n        <br>\n        \uFF082020\u5E749\u670810\u65E5, \u30AA\u30F3\u30E9\u30A4\u30F3\uFF09\n        </li>\n        </ol>\n        <h3>\u30DD\u30B9\u30BF\u30FC\uFF08\u56FD\u5185\uFF09</h3>\n        <ol reversed>\n        <li>\n        <u>\u77F3\u4E95\u6D69\u5E73</u>, \u6625\u5C71\u6F64, \u6749\u91CE\u4FEE,\n        <br>\n        \"Allen-Heine-Cardona\u7406\u8AD6\u306E\u62E1\u5F35\u3068\u30D0\u30F3\u30C9\u30AE\u30E3\u30C3\u30D7\u88DC\u6B63\u3078\u306E\u9069\u7528\",\n        <br>\n        \u7269\u6027\u7814\u7A76\u6240\u30B9\u30D1\u30B3\u30F3\u5171\u540C\u5229\u7528\u30FBCCMS\u5408\u540C\u7814\u7A76\u4F1A\u300C\u8A08\u7B97\u7269\u8CEA\u79D1\u5B66\u306E\u65B0\u5C55\u958B\u300D.\n        <br>\n        \uFF082022\u5E745\u670812\u65E5, \u30AA\u30F3\u30E9\u30A4\u30F3\uFF09\n        </li>\n        <li>\n        <u>\u77F3\u4E95\u6D69\u5E73</u>, \u6625\u5C71\u6F64, \u6749\u91CE\u4FEE,\n        <br>\n        \"\u96FB\u5B50\u30FB\u30DE\u30EB\u30C1\u30D5\u30A9\u30CE\u30F3\u76F8\u4E92\u4F5C\u7528\u306E\u53D6\u308A\u8FBC\u307F\u306B\u5411\u3051\u305F\u7B2C\u4E00\u539F\u7406\u8A08\u7B97\u624B\u6CD5\u306E\u958B\u767A\",\n        <br>\n        \u65E5\u672C\u7269\u7406\u5B66\u4F1A2021\u5E74\u79CB\u5B63\u5927\u4F1A.\n        <br>\n        \uFF082021\u5E749\u670821\u65E5, \u30AA\u30F3\u30E9\u30A4\u30F3\uFF09\n        </li>\n        <li>\n        <u>\u77F3\u4E95\u6D69\u5E73</u>, \u6625\u5C71\u6F64, \u6749\u91CE\u4FEE,\n        <br>\n        \"\u96FB\u5B50\u30FB\u30D5\u30A9\u30CE\u30F3\u76F8\u4E92\u4F5C\u7528\u306B\u3088\u308B\u30D0\u30F3\u30C9\u30AE\u30E3\u30C3\u30D7\u88DC\u6B63\u306B\u304A\u3051\u308B\u9078\u629E\u5247\",\n        <br>\n        \u7269\u6027\u7814\u7A76\u6240\u30B9\u30D1\u30B3\u30F3\u5171\u540C\u5229\u7528\u30FBCCMS\u5408\u540C\u7814\u7A76\u4F1A\u300C\u8A08\u7B97\u7269\u8CEA\u79D1\u5B66\u306E\u65B0\u5C55\u958B2020\u300D.\n        <br>\n        \uFF082020\u5E7412\u670821\u65E5, \u30AA\u30F3\u30E9\u30A4\u30F3\uFF09\n        </li>\n        <li>\n        <u>Kohei Ishii</u>, Yoshifumi Noguchi, and Osamu Sugino,\n        <br>\n        \"Self-consistent GW+BSE calculation on small molecules\",\n        <br>\n        The International Summer WorkShop 2018 on First-Principles Electronic Structure Calculations in ISSP.\n        <br>\n        \uFF082018\u5E747\u670811\u65E5, \u6771\u4EAC\u5927\u5B66\u7269\u6027\u7814\u7A76\u6240\uFF09\n        </li>\n        </ol>\n        </div>";
    }
}
