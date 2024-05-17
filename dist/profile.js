function loadProfile() {
    page = 'profile';
    loadSidebar();
    if (lang === 'en') {
        document.getElementById('main').innerHTML = "<div>\n        <h2>Profile</h2>\n        <dl>\n        <dt>Name</dt>\n        <dd>Kohei Ishii</dd>\n        <dt>Position</dt>\n        <dd>Ph.D. Student</dd>\n        <dt>Affiliation</dt>\n        <dd>Department of Physics, Graduate School of Science,<br>\n        The University of Tokyo, Japan</dd>\n        <dt>Research Theme</dt>\n        <dd>Development of first-principles calculation methods for electron-phonon interactions</dd>\n        <dt>Hobbies</dt>\n        <dd>painting, drawing, photography, cooking, literature, coffee</dd>\n        </dl>\n        <h2>Link</h2>\n        <ul>\n            <li><a href=\"https://x.com/cohsh_\">X</a> (research)</li>\n            <li><a href=\"https://x.com/cohsh_t\">X</a> (hobbies)</li>\n            <li><a href=\"https://www.instagram.com/cohsh_\">Instagram</a> (painting and drawing)</li>\n            <li><a href=\"https://www.instagram.com/cohsh_t\">Instagram</a> (photography)</li>\n        </ul>\n        </div>";
    }
    else if (lang === 'ja') {
        document.getElementById('main').innerHTML = "<div>\n        <h2>\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB</h2>\n        <dl>\n        <dt>\u540D\u524D</dt>\n        <dd>\u77F3\u4E95\u6D69\u5E73</dd>\n        <dt>\u6240\u5C5E</dt>\n        <dd>\u6771\u4EAC\u5927\u5B66\u5927\u5B66\u9662\u7406\u5B66\u7CFB\u7814\u7A76\u79D1<br>\u7269\u7406\u5B66\u5C02\u653B\u535A\u58EB\u8AB2\u7A0B</dd>\n        <dt>\u7814\u7A76\u30C6\u30FC\u30DE</dt>\n        <dd>\u96FB\u5B50\u30FB\u30D5\u30A9\u30CE\u30F3\u76F8\u4E92\u4F5C\u7528\u306E\u7B2C\u4E00\u539F\u7406\u8A08\u7B97\u624B\u6CD5\u306E\u958B\u767A</dd>\n        <dt>\u8DA3\u5473</dt>\n        <dd>\u7D75\u3001\u5199\u771F\u3001\u6599\u7406\u3001\u6587\u5B66\u3001\u73C8\u7432</dd>\n        </dl>\n        <h2>\u30EA\u30F3\u30AF</h2>\n        <ul>\n            <li><a href=\"https://x.com/cohsh_\">X</a> (\u7814\u7A76)</li>\n            <li><a href=\"https://x.com/cohsh_t\">X</a>\uFF08\u8DA3\u5473\uFF09</li>\n            <li><a href=\"https://www.instagram.com/cohsh_\">Instagram</a>\uFF08\u7D75\uFF09</li>\n            <li><a href=\"https://www.instagram.com/cohsh_t\">Instagram</a>\uFF08\u5199\u771F\uFF09</li>\n        </ul>\n        </div>";
    }
}
