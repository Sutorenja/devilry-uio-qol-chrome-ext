// language related utils

//constants
/*const PLURAL_MARKER = "PLURAL";
const SINGLE = "SINGLE"; // Norwegian words that end in "e" only add "r" when in plural, not "er", hence the need for this additional constant.
const IN_TIME = "IN_TIME";
const AND = "AND";
const MONTH = "MONTH";
const WEEK = "WEEK";
const DAY = "DAY";
const HOUR = "HOUR";
const MINUTE = "MINUTE";

let lang = {};

function setLang() {
    // basic usage:
    // input: (lang[IN_TIME]) (number) (lang[MONTH])(lang[PLURAL_MARKER])
    // output: in 1 month

    // week-specific usage:
    // input: (lang[IN_TIME]) (number) (lang[SINGLE_WEEK])(lang[WEEK])(lang[PLURAL_MARKER])
    // output: in 5 weeks

    switch(USER_LANG) {
        case "en":
            lang[PLURAL_MARKER] = "s";
            lang[SINGLE] = "";
            lang[IN_TIME] = "due in";
            lang[AND] = "and";
            lang[MONTH] = "month";
            lang[WEEK] = "week";
            lang[DAY] = "day";
            lang[HOUR] = "hour";
            lang[MINUTE] = "minute";
            break;
        case "no":
            lang[PLURAL_MARKER] = "er";
            lang[SINGLE] = "e";
            lang[IN_TIME] = "forfaller om";
            lang[AND] = "og";
            lang[MONTH] = "måned";
            lang[WEEK] = "uk"; // incredibly scuffed buuuut SINGLE adds the "e".
            lang[DAY] = "dag";
            lang[HOUR] = "tim";
            lang[MINUTE] = "minutt";
            break;
    }
}*/

const ENGLISH = "en";
const NORWEGIAN = "no";

const STATUS_TRUE = "delivered";
const STATUS_FALSE = "not.delivered";
const DEADLINE_PASSED = "deadline.passed";
const AND = "and";
const WHEN = "when";
const MONTH = "month";
const MONTHS = "month.plural";
const WEEK = "week";
const WEEKS = "week.plural";
const DAY = "day";
const DAYS = "day.plural";
const HOUR = "hour";
const HOURS = "hour.plural";
const MINUTE = "minute";
const MINUTES = "minute.plural";
const SECOND = "second";
const SECONDS = "second.plural";

function loadLanguageFiles() {

}

function setLanguage(lang) {

}

