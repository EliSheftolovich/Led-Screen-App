const articles = [
    {
        _id: "5b21ca3eeb7f6fbccd471815",
        title: "רזולוציה",
        subject: "רזולוציה",
        liked: "false",
        text: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס."
    },
    {
        _id: "5b21ca3eeb7f6fbccd471816",
        title: "סוגי פיקסלים",
        subject: "רזולוציה",
        liked: "false",
        text: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס."
    },
    {
        _id: "5b21ca3eeb7f6fbccd471817",
        title: "פיטץ'",
        subject: "רזולוציה",
        liked: "false",
        text: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס."
    },
    {
        _id: "5b21ca3eeb7f6fbccd471818",
        title: "פנים או חוץ",
        subject: "סוגי מסך",
        liked: "false",
        text: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס."
    },
    {
        _id: "5b21ca3eeb7f6fbccd471819",
        title: "עוצמת הארה",
        subject: "סוגי מסך",
        liked: "false",
        text: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס."
    },
    {
        _id: "5b21ca3eeb7f6fbccd471825",
        title: "IP",
        subject: "סוגי מסך",
        liked: "false",
        text: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס."
    },
    {
        _id: "5b21ca3eeb7f6fbccd471835",
        title: "מיקום ההתקנה",
        subject: "צפיה במסך",
        liked: "false",
        text: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס."
    },
    {
        _id: "5b21ca3eeb7f6fbccd471845",
        title: "מרחק צפיה",
        subject: "צפיה במסך",
        liked: "false",
        text: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס."
    },
    {
        _id: "5b21ca3eeb7f6fbccd471855",
        title: "זוית צפיה",
        subject: "צפיה במסך",
        liked: "false",
        text: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס."
    },
    {
        _id: "5b21ca3eeb7f6fbccd471865",
        title: "מקום ההתקנה",
        subject: "צפיה במסך",
        liked: "false",
        text: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס."
    },
    {
        _id: "5b21ca3eeb7f6fbccd471875",
        title: "קונטרולרים",
        subject: "מערכות מחשוב",
        liked: "false",
        text: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס."
    },
    {
        _id: "5b21ca3eeb7f6fbccd471885",
        title: "מערכות ניגון",
        subject: "מערכות מחשוב",
        liked: "false",
        text: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס."
    },
    
];

export function getArticles() {
    return articles;
  }
  
  export function getArticle(id) {
    return articles.find(a => a._id === id);
  }