---
layout: default
title: VAM B1 RPC Unit Tests
---

Taken from automated list - changes include removing "asynchronous", making a formal markdown table and separating RPCs with a blank row.

Name | Description |
--- | --- |
GMV DLL VERSION | empty string param should return NO
GMV DLL VERSION | invalid numeric param should return NO
GMV DLL VERSION | invalid string param should return NO
GMV DLL VERSION | valid param should return YES or NO
&nbsp; | &nbsp;
GMV GET VITAL TYPE IEN | valid array param should return list of caret-delimited ien/label pairs
&nbsp; | &nbsp;
ORB SORT METHOD | formatResult: valid param should return a sort method
ORB SORT METHOD | invokeRPC: empty arg should return orb sort method
&nbsp; | &nbsp;
ORDEA DEATEXT | invoking invokeRPC with a test nodeVISTA session context should return an array with strings
ORDEA DEATEXT | invoking invokeRPC with an invalid session context should return an empty array
ORDEA DEATEXT | invoking invokeRPC with empty arguments should return specific string
ORDEA DEATEXT | invoking invokeRPC with the default session context should return an empty array
&nbsp; | &nbsp;
ORIMO ISCLOC | invoking formatResult with a invalid string input should return Number 0
ORIMO ISCLOC | invoking formatResult with a valid string input should return Number 1
&nbsp; | &nbsp;
ORQORB SORT | formatResult: valid param should return a sort method
ORQORB SORT | invokeRPC: empty arg should return orb sort method
&nbsp; | &nbsp;
ORQPT DEFAULT LIST SOURCE | invoking formatResult with a valid object should return source list as “internalVal^externalVal^categoryName
&nbsp; | &nbsp;
ORQQCN2 GET CONTEXT | invoke service function to recieve response
&nbsp; | &nbsp;
ORQQPX NEW REMINDERS ACTIVE | no params should return tool menu list
&nbsp; | &nbsp;
ORWCH LDFONT | Empty arg should return integer
ORWCH LDFONT | Numeric param should return integer
ORWCH LDFONT | String param should return integer
&nbsp; | &nbsp;
ORWCH LOADALL | no params should return tool menu list
&nbsp; | &nbsp;
ORWCH LOADSIZ | invokeRPC: Int returns empty string
ORWCH LOADSIZ | invokeRPC: String returns empty str
ORWCH LOADSIZ | invokeRPC: Valid string returns result
&nbsp; | &nbsp;
ORWCIRN AUTORDV | Expect res to be defined and number
&nbsp; | &nbsp;
ORWCOM ORDEROBJ | invoking formatResult with a valid arr
&nbsp; | &nbsp;
ORWCOM PTOBJ | formatResult: valid param should return a caret-delimited string or 0
&nbsp; | &nbsp;
ORWCV1 COVERSHEET LIST | formatResult: valid param should return an Array of caret-delimited strings
&nbsp; | &nbsp;
ORWDAL32 CLINUSER | formatResult: valid param should return 1 or 0
&nbsp; | &nbsp;
ORWDAL32 DEF | invoking formatResult with a valid array should return Allergy Definition array
&nbsp; | &nbsp;
ORWDAL32 SITE PARAMS | valid array param should return caret-delimited string of length 11
&nbsp; | &nbsp;
ORWDBA1 BASTATUS | formatResult: Input response of Boolean false should return MUMPS equivalent 0
ORWDBA1 BASTATUS | formatResult: Input response of Boolean true should return MUMPS equivalent 1
&nbsp; | &nbsp;
ORWDPS32 VALQTY | no params should return tool menu list
&nbsp; | &nbsp;
ORWDPS32 VALROUTE | invoking formatResult with a valid object should return correct concatenated string
ORWDPS32 VALROUTE | invoking formatResult with object that has insufficent keys returns error
&nbsp; | &nbsp;
ORWDRA32 LOCTYPE | Should handle [1]
ORWDRA32 LOCTYPE | Should handle []
ORWDRA32 LOCTYPE | Should handle [bar]
ORWDRA32 LOCTYPE | Should handle [false]
ORWDRA32 LOCTYPE | invoking formatResult with valid object passes
&nbsp; | &nbsp;
ORWDX WRLST specs	invoking formatResult with a valid object should return dialog Array
ORWDX WRLST specs	invoking formatResult with an invalid object should return Error
&nbsp; | &nbsp;
ORWDX2 DCREASON | invoking formatResult with a valid array should pass
&nbsp; | &nbsp;
ORWDXC ON | Expected results to be exist and return either “E” or “D
&nbsp; | &nbsp;
ORWDXM MSTYLE | invoking invokeRPC with empty arguments should return either 0 or 1
&nbsp; | &nbsp;
ORWDXVB3 COLLTIM | no param should return 0 or 1
&nbsp; | &nbsp;
ORWDXVB3 SWPANEL | Expect res to be defined and number
&nbsp; | &nbsp;
ORWOR PKISITE | formatResult: Input response of Boolean true should return MUMPS equivalent 0
ORWOR PKISITE | formatResult: Input response of Boolean true should return MUMPS equivalent 1
&nbsp; | &nbsp;
ORWORB GETSORT | Empty second param list list should contain “^” and have correct datatypes
ORWORB GETSORT | Empty second param list should be defined and a string
ORWORB GETSORT | empty arr should return empty string
ORWORB GETSORT | formatResult list should be defined a string
ORWORB GETSORT | formatResult list should contain “^” and have correct datatypes
&nbsp; | &nbsp;
ORWORDG IEN | invoking formatResult with a valid array should return … … …
ORWORDG IEN | no params should return tool menu list
&nbsp; | &nbsp;
ORWPCE ALWAYS CHECKOUT | no params should return tool menu list
&nbsp; | &nbsp;
ORWPCE ANYTIME | no params should return tool menu list
&nbsp; | &nbsp;
ORWPCE ASKPCE | invokeRPC: Integer arg returns integer
&nbsp; | &nbsp;
ORWPCE GET EDUCATION TOPICS | valid array param should return list of caret-delimited ien/label pairs
&nbsp; | &nbsp;
ORWPCE GET EXAM TYPE | formatResult list should contain “^” and have correct datatypes
&nbsp; | &nbsp;
ORWPCE GET EXCLUDED | formatResult list should be defined an an array
&nbsp; | &nbsp;
ORWPCE GET HEALTH FACTORS TY | formatResult list with category should be defined as an array
ORWPCE GET HEALTH FACTORS TY | formatResult list with category should contain “^” and have correct datatypes
ORWPCE GET HEALTH FACTORS TY | formatResult list without category should be defined as an array
ORWPCE GET HEALTH FACTORS TY | formatResult list without category should contain “^” and have correct datatypes
&nbsp; | &nbsp;
ORWPCE GET IMMUNIZATION TYPE | valid array param should return list of caret-delimited ien/label pairs
&nbsp; | &nbsp;
ORWPCE GET SET OF CODES | valid object should return Set of Codes Array
&nbsp; | &nbsp;
ORWPCE GET SKIN TEST TYPE | valid array param should return list of caret-delimited ien/label pairs
&nbsp; | &nbsp;
ORWPCE1 NONCOUNT | invoking formatResult with Boolean false should return number equivalent 0
ORWPCE1 NONCOUNT | invoking formatResult with Boolean true should return number equivalent 1
&nbsp; | &nbsp;
ORWPS REASON | invoking formatResult with a valid array should return expected output as array of strings
ORWPS REASON | invoking invokeRPC with empty arguments should return expected output as array of strings
&nbsp; | &nbsp;
ORWSR SHOW SURG TAB | invoking formatResult with valid params should return 0 or 1
&nbsp; | &nbsp;
ORWTPD1 GETEAFL | invoking invokeRPC with empty arguments should return empty string
&nbsp; | &nbsp;
ORWTPD1 GETEDATS | Should format output objects if missing some values
ORWTPD1 GETEDATS | Should handle negative cases where invalid results are passed in
ORWTPD1 GETEDATS | Should properly handle output object formatting
&nbsp; | &nbsp;
ORWTPO CSARNGD | invoking formatResult with TEST_INPUT should return specific output “T-365^T+90
&nbsp; | &nbsp;
ORWTPO GETIMGD | no param should return semicolon-delimited string
&nbsp; | &nbsp;
ORWU CLINLOC | formatResult: error Object should return empty array
ORWU CLINLOC | formatResult: valid Object Array should return Array of formatted Strings
&nbsp; | &nbsp;
ORWU PARAM | specific string param should return expected parameter value
&nbsp; | &nbsp;
ORWU TOOLMENU | no params should return tool menu list
&nbsp; | &nbsp;
ORWU1 NEWLOC | formatResult: error Object should return empty array
ORWU1 NEWLOC | formatResult: valid Object Array should return Array of formatted Strings
&nbsp; | &nbsp;
TIU TEMPLATE ACCESS LEVEL | formatResult: should only accept Object param
TIU TEMPLATE ACCESS LEVEL | invoking formatResult with a valid Object input should return a value between 0 and 3
&nbsp; | &nbsp;
TIU TEMPLATE GET DEFAULTS | invoking invokeRPC with empty arguments should return empty string
TIU TEMPLATE GET DEFAULTS | invoking invokeRPC with null arguments should return error
TIU TEMPLATE GET DEFAULTS | invoking invokeRPC with numeric arguments should return error
TIU TEMPLATE GET DEFAULTS | invoking invokeRPC with string arguments should return error
&nbsp; | &nbsp;
XWB GET BROKER INFO | formatResult: Should return specfic array containing brokerActivityTimeout in seconds
XWB GET BROKER INFO | invokeRPC: Should return response object containing brokerActivityTimeout
