//// [tests/cases/compiler/recursiveExportAssignmentAndFindAliasedType4.ts] ////

//// [recursiveExportAssignmentAndFindAliasedType4_moduleC.ts]
import self = require("recursiveExportAssignmentAndFindAliasedType4_moduleC");
export = self;

//// [recursiveExportAssignmentAndFindAliasedType4_moduleB.ts]
class ClassB { }
export = ClassB;

//// [recursiveExportAssignmentAndFindAliasedType4_moduleA.ts]
import moduleC = require("recursiveExportAssignmentAndFindAliasedType4_moduleC");
import ClassB = require("recursiveExportAssignmentAndFindAliasedType4_moduleB");
export var b: ClassB; // This should result in type ClassB

//// [recursiveExportAssignmentAndFindAliasedType4_moduleC.js]
define(["require", "exports"], function (require, exports) {
    "use strict";
});
//// [recursiveExportAssignmentAndFindAliasedType4_moduleB.js]
define(["require", "exports"], function (require, exports) {
    "use strict";
    var ClassB = (function () {
        function ClassB() {
        }
        return ClassB;
    }());
    return ClassB;
});
//// [recursiveExportAssignmentAndFindAliasedType4_moduleA.js]
define(["require", "exports"], function (require, exports) {
    "use strict";
});
