---
layout: default
title: Model Test Results
---

## Model Test Results
_Test run Dec 12, 2017 9:46:08 AM GMT+0000 (UTC)_

| Group | Description |
| ----- | ----------- |
| GMV DLL VERSION asynchronous specs | empty string param should return NO |
| GMV DLL VERSION asynchronous specs | invalid numeric param should return NO |
| GMV DLL VERSION asynchronous specs | invalid string param should return NO |
| GMV DLL VERSION asynchronous specs | valid param should return YES or NO |
| GMV GET VITAL TYPE IEN asynchronous specs | valid array param should return list of caret-delimited ien/label pairs |
| ORB SORT METHOD asynchronous specs | formatResult: valid param should return a sort method |
| ORB SORT METHOD asynchronous specs | invokeRPC: empty arg should return orb sort method |
| ORDEA DEATEXT asynchronous specs | invoking invokeRPC with a test nodeVISTA session context should return an array with strings |
| ORDEA DEATEXT asynchronous specs | invoking invokeRPC with an invalid session context should return an empty array |
| ORDEA DEATEXT asynchronous specs | invoking invokeRPC with empty arguments should return specific string |
| ORDEA DEATEXT asynchronous specs | invoking invokeRPC with the default session context should return an empty array |
| ORIMO ISCLOC asynchronous specs | invoking formatResult with a invalid string input should return Number 0 |
| ORIMO ISCLOC asynchronous specs | invoking formatResult with a valid string input should return Number 1 |
| ORQORB SORT asynchronous specs | formatResult: valid param should return a sort method |
| ORQORB SORT asynchronous specs | invokeRPC: empty arg should return orb sort method |
| ORQPT DEFAULT LIST SOURCE asynchronous specs | invoking formatResult with a valid object should return source list as "internalVal^externalVal^categoryName |
| ORQQCN2 GET CONTEXT asynchronous specs | invoke service function to recieve response |
| ORQQPX NEW REMINDERS ACTIVE asynchronous specs | no params should return tool menu list |
| ORWCH LDFONT asynchronous specs | Empty arg should return integer |
| ORWCH LDFONT asynchronous specs | Numeric param should return integer |
| ORWCH LDFONT asynchronous specs | String param should return integer |
| ORWCH LOADALL asynchronous specs | no params should return tool menu list |
| ORWCH LOADSIZ asynchronous specs | invokeRPC: Int returns empty string |
| ORWCH LOADSIZ asynchronous specs | invokeRPC: String returns empty str |
| ORWCH LOADSIZ asynchronous specs | invokeRPC: Valid string returns result |
| ORWCIRN AUTORDV asynchronous specs | Expect res to be defined and number |
| ORWCOM ORDEROBJ asynchronous specs | invoking formatResult with a valid arr |
| ORWCOM PTOBJ asynchronous specs | formatResult: valid param should return a caret-delimited string or 0 |
| ORWCV1 COVERSHEET LIST asynchronous specs | formatResult: valid param should return an Array of caret-delimited strings |
| ORWDAL32 CLINUSER asynchronous specs | formatResult: valid param should return 1 or 0 |
| ORWDAL32 DEF asynchronous specs | invoking formatResult with a valid array should return Allergy Definition array |
| ORWDAL32 SITE PARAMS asynchronous specs | valid array param should return caret-delimited string of length 11 |
| ORWDBA1 BASTATUS asynchronous specs | formatResult: Input response of Boolean false should return MUMPS equivalent 0 |
| ORWDBA1 BASTATUS asynchronous specs | formatResult: Input response of Boolean true should return MUMPS equivalent 1 |
| ORWDPS32 VALQTY asynchronous specs | no params should return tool menu list |
| ORWDPS32 VALROUTE asynchronous specs | invoking formatResult with a valid object should return correct concatenated string |
| ORWDPS32 VALROUTE asynchronous specs | invoking formatResult with object that has insufficent keys returns error |
| ORWDRA32 LOCTYPE asynchronous specs | Should handle [1] |
| ORWDRA32 LOCTYPE asynchronous specs | Should handle [] |
| ORWDRA32 LOCTYPE asynchronous specs | Should handle [bar] |
| ORWDRA32 LOCTYPE asynchronous specs | Should handle [false] |
| ORWDRA32 LOCTYPE asynchronous specs | invoking formatResult with valid object passes |
| ORWDX WRLST specs | invoking formatResult with a valid object should return dialog Array |
| ORWDX WRLST specs | invoking formatResult with an invalid object should return Error |
| ORWDX2 DCREASON asynchronous specs | invoking formatResult with a valid array should pass |
| ORWDXC ON asynchronous specs | Expected results to be exist and return either "E" or "D |
| ORWDXM MSTYLE asynchronous specs | invoking invokeRPC with empty arguments should return either 0 or 1 |
| ORWDXVB3 COLLTIM asynchronous specs | no param should return 0 or 1 |
| ORWDXVB3 SWPANEL asynchronous specs | Expect res to be defined and number |
| ORWOR PKISITE asynchronous specs | formatResult: Input response of Boolean true should return MUMPS equivalent 0 |
| ORWOR PKISITE asynchronous specs | formatResult: Input response of Boolean true should return MUMPS equivalent 1 |
| ORWORB GETSORT asynchronous specs | Empty second param list list should contain "^" and have correct datatypes |
| ORWORB GETSORT asynchronous specs | Empty second param list should be defined and a string |
| ORWORB GETSORT asynchronous specs | empty arr should return empty string |
| ORWORB GETSORT asynchronous specs | formatResult list should be defined a string |
| ORWORB GETSORT asynchronous specs | formatResult list should contain "^" and have correct datatypes |
| ORWORDG IEN asynchronous specs | invoking formatResult with a valid array should return ... ... ... |
| ORWORDG IEN asynchronous specs | no params should return tool menu list |
| ORWPCE ALWAYS CHECKOUT asynchronous specs | no params should return tool menu list |
| ORWPCE ANYTIME asynchronous specs | no params should return tool menu list |
| ORWPCE ASKPCE asynchronous specs | invokeRPC: Integer arg returns integer |
| ORWPCE GET EDUCATION TOPICS asynchronous specs | valid array param should return list of caret-delimited ien/label pairs |
| ORWPCE GET EXAM TYPE asynchronous specs | formatResult list should contain "^" and have correct datatypes |
| ORWPCE GET EXCLUDED asynchronous specs | formatResult list should be defined an an array |
| ORWPCE GET HEALTH FACTORS TY asynchronous specs | formatResult list with category should be defined as an array |
| ORWPCE GET HEALTH FACTORS TY asynchronous specs | formatResult list with category should contain "^" and have correct datatypes |
| ORWPCE GET HEALTH FACTORS TY asynchronous specs | formatResult list without category should be defined as an array |
| ORWPCE GET HEALTH FACTORS TY asynchronous specs | formatResult list without category should contain "^" and have correct datatypes |
| ORWPCE GET IMMUNIZATION TYPE asynchronous specs | valid array param should return list of caret-delimited ien/label pairs |
| ORWPCE GET SET OF CODES asynchronous specs | valid object should return Set of Codes Array |
| ORWPCE GET SKIN TEST TYPE asynchronous specs | valid array param should return list of caret-delimited ien/label pairs |
| ORWPCE1 NONCOUNT asynchronous specs | invoking formatResult with Boolean false should return number equivalent 0 |
| ORWPCE1 NONCOUNT asynchronous specs | invoking formatResult with Boolean true should return number equivalent 1 |
| ORWPS REASON asynchronous specs | invoking formatResult with a valid array should return expected output as array of strings |
| ORWPS REASON asynchronous specs | invoking invokeRPC with empty arguments should return expected output as array of strings |
| ORWSR SHOW SURG TAB asynchronous specs | invoking formatResult with valid params should return 0 or 1 |
| ORWTPD1 GETEAFL asynchronous specs | invoking invokeRPC with empty arguments should return empty string |
| ORWTPD1 GETEDATS asynchronous specs | Should format output objects if missing some values |
| ORWTPD1 GETEDATS asynchronous specs | Should handle negative cases where invalid results are passed in |
| ORWTPD1 GETEDATS asynchronous specs | Should properly handle output object formatting |
| ORWTPO CSARNGD asynchronous specs | invoking formatResult with TEST_INPUT should return specific output "T-365^T+90 |
| ORWTPO GETIMGD asynchronous specs | no param should return semicolon-delimited string |
| ORWU CLINLOC asynchronous specs | formatResult: error Object should return empty array |
| ORWU CLINLOC asynchronous specs | formatResult: valid Object Array should return Array of formatted Strings |
| ORWU PARAM asynchronous specs | specific string param should return expected parameter value |
| ORWU TOOLMENU asynchronous specs | no params should return tool menu list |
| ORWU1 NEWLOC asynchronous specs | formatResult: error Object should return empty array |
| ORWU1 NEWLOC asynchronous specs | formatResult: valid Object Array should return Array of formatted Strings |
| TIU TEMPLATE ACCESS LEVEL asynchronous specs | formatResult: should only accept Object param |
| TIU TEMPLATE ACCESS LEVEL asynchronous specs | invoking formatResult with a valid Object input should return a value between 0 and 3 |
| TIU TEMPLATE GET DEFAULTS asynchronous specs | invoking invokeRPC with empty arguments should return empty string |
| TIU TEMPLATE GET DEFAULTS asynchronous specs | invoking invokeRPC with null arguments should return error |
| TIU TEMPLATE GET DEFAULTS asynchronous specs | invoking invokeRPC with numeric arguments should return error |
| TIU TEMPLATE GET DEFAULTS asynchronous specs | invoking invokeRPC with string arguments should return error |
| XWB GET BROKER INFO asynchronous specs | formatResult: Should return specfic array containing brokerActivityTimeout in seconds |
| XWB GET BROKER INFO asynchronous specs | invokeRPC: Should return response object containing brokerActivityTimeout |