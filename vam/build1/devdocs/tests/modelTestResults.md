---
layout: default
title: RPC Emulation Unit Tests
---

## RPC Emulation Unit Tests
_Test run December 13th 2017, 11:30:26 pm_

Total RPC Emulation test groups run: 70

| Group | Description |
| ----- | ----------- |
| GMV CONVERT DATE | 'invokeRPC' called with argument(s) '0': result should be ''
|  |  |
| GMV DLL VERSION | empty string param should return NO
| GMV DLL VERSION | invalid numeric param should return NO
| GMV DLL VERSION | invalid string param should return NO
| GMV DLL VERSION | valid param should return YES or NO
|  |  |
| GMV GET CURRENT TIME | 'invokeRPC' called with argument(s) '0': result should be 'a number'
| GMV GET CURRENT TIME | 'invokeRPC' called with argument(s) 'NOW': result should be 'a number'
| GMV GET CURRENT TIME | 'invokeRPC' called with no arguments: result should be 'a number'
|  |  |
| GMV GET VITAL TYPE IEN | valid array param should return list of caret-delimited ien/label pairs
|  |  |
| ORB SORT METHOD | formatResult: valid param should return a sort method
| ORB SORT METHOD | invokeRPC: empty arg should return orb sort method
|  |  |
| ORDEA DEATEXT | invoking invokeRPC with a test nodeVISTA session context should return an array with strings
| ORDEA DEATEXT | invoking invokeRPC with an invalid session context should return an empty array
| ORDEA DEATEXT | invoking invokeRPC with empty arguments should return specific string
| ORDEA DEATEXT | invoking invokeRPC with the default session context should return an empty array
|  |  |
| OREVNTX1 DLGIEN | 'invokeRPC' called with argument(s) '': result should be ''
| OREVNTX1 DLGIEN | 'invokeRPC' called with argument(s) 'PSJ OR PAT OE': result should be '129'
| OREVNTX1 DLGIEN | 'invokeRPC' called with argument(s) 'PSJI OR PAT FLUID OE': result should be '130'
| OREVNTX1 DLGIEN | 'invokeRPC' called with argument(s) 'PSO OERR': result should be '147'
|  |  |
| ORIMO ISCLOC | invoking formatResult with boolean false gives 0
| ORIMO ISCLOC | invoking formatResult with boolean true gives 1
|  |  |
| ORQ NULL LIST | invokeRPC: any arg should return array with single empty string
| ORQ NULL LIST | invokeRPC: empty arg should return array with single empty string
|  |  |
| ORQORB SORT | formatResult: valid param should return a sort method
| ORQORB SORT | invokeRPC: empty arg should return orb sort method
|  |  |
| ORQPT DEFAULT LIST SOURCE | invoking formatResult with a valid object should return source list as "internalVal^externalVal^categoryName
|  |  |
| ORQQCN2 GET CONTEXT | invoke service function to recieve response
|  |  |
| ORQQPX NEW REMINDERS ACTIVE | no params should return tool menu list
|  |  |
| ORWCH LDFONT | Empty arg should return integer
| ORWCH LDFONT | Numeric param should return integer
| ORWCH LDFONT | String param should return integer
|  |  |
| ORWCH LOADALL | no params should return tool menu list
|  |  |
| ORWCH LOADSIZ | invokeRPC: Int returns empty string
| ORWCH LOADSIZ | invokeRPC: String returns empty str
| ORWCH LOADSIZ | invokeRPC: Valid string returns result
|  |  |
| ORWCIRN AUTORDV | Expect res to be defined and number
|  |  |
| ORWCOM ORDEROBJ | invoking formatResult with a valid arr
|  |  |
| ORWCOM PTOBJ | formatResult: valid param should return a caret-delimited string or 0
|  |  |
| ORWCV1 COVERSHEET LIST | formatResult: valid param should return an Array of caret-delimited strings
|  |  |
| ORWDAL32 CLINUSER | formatResult: valid param should return 1 or 0
|  |  |
| ORWDAL32 DEF | invoking formatResult with a valid array should return Allergy Definition array
|  |  |
| ORWDAL32 SITE PARAMS | valid array param should return caret-delimited string of length 11
|  |  |
| ORWDBA1 BASTATUS | formatResult: Input response of Boolean false should return MUMPS equivalent 0
| ORWDBA1 BASTATUS | formatResult: Input response of Boolean true should return MUMPS equivalent 1
|  |  |
| ORWDPS32 VALQTY | no params should return tool menu list
|  |  |
| ORWDPS32 VALROUTE | invoking formatResult with a valid object should return correct concatenated string
| ORWDPS32 VALROUTE | invoking formatResult with object that has insufficent keys returns error
|  |  |
| ORWDRA32 LOCTYPE | Should handle [1]
| ORWDRA32 LOCTYPE | Should handle []
| ORWDRA32 LOCTYPE | Should handle [bar]
| ORWDRA32 LOCTYPE | Should handle [false]
| ORWDRA32 LOCTYPE | invoking formatResult with valid object passes
|  |  |
| ORWDX DGNM | 'invokeRPC' called with argument(s) '': result should be ''
| ORWDX DGNM | 'invokeRPC' called with argument(s) 'O RX': result should be '4'
| ORWDX DGNM | 'invokeRPC' called with argument(s) 'UD RX': result should be '21'
|  |  |
| ORWDX WRLST | invoking formatResult with a valid object should return dialog Array
| ORWDX WRLST | invoking formatResult with an invalid object should return Error
|  |  |
| ORWDX2 DCREASON | invoking formatResult with a valid array should pass
|  |  |
| ORWDXC ON | Expected results to be exist and return either "E" or "D
|  |  |
| ORWDXM MSTYLE | invoking invokeRPC with empty arguments should return either 0 or 1
|  |  |
| ORWDXVB3 COLLTIM | no param should return 0 or 1
|  |  |
| ORWDXVB3 SWPANEL | Expect res to be defined and number
|  |  |
| ORWOR PKISITE | formatResult: Input response of Boolean true should return MUMPS equivalent 0
| ORWOR PKISITE | formatResult: Input response of Boolean true should return MUMPS equivalent 1
|  |  |
| ORWORB GETSORT | Empty second param list list should contain "^" and have correct datatypes
| ORWORB GETSORT | Empty second param list should be defined and a string
| ORWORB GETSORT | empty arr should return empty string
| ORWORB GETSORT | formatResult list should be defined a string
| ORWORB GETSORT | formatResult list should contain "^" and have correct datatypes
|  |  |
| ORWORDG IEN | invoking formatResult with a valid array should return ... ... ...
| ORWORDG IEN | no params should return tool menu list
|  |  |
| ORWPCE ALWAYS CHECKOUT | no params should return tool menu list
|  |  |
| ORWPCE ANYTIME | no params should return tool menu list
|  |  |
| ORWPCE ASKPCE | invokeRPC: Integer arg returns integer
|  |  |
| ORWPCE AUTO VISIT TYPE SELECT | 'invokeRPC' called with argument(s) '': result should be 'an error'
| ORWPCE AUTO VISIT TYPE SELECT | 'invokeRPC' called with argument(s) '2': result should be '1'
| ORWPCE AUTO VISIT TYPE SELECT | 'invokeRPC' called with argument(s) '3': result should be '1'
|  |  |
| ORWPCE GET EDUCATION TOPICS | valid array param should return list of caret-delimited ien/label pairs
|  |  |
| ORWPCE GET EXAM TYPE | formatResult list should contain "^" and have correct datatypes
|  |  |
| ORWPCE GET EXCLUDED | formatResult list should be defined an an array
|  |  |
| ORWPCE GET HEALTH FACTORS TY | formatResult list with category should be defined as an array
| ORWPCE GET HEALTH FACTORS TY | formatResult list with category should contain "^" and have correct datatypes
| ORWPCE GET HEALTH FACTORS TY | formatResult list without category should be defined as an array
| ORWPCE GET HEALTH FACTORS TY | formatResult list without category should contain "^" and have correct datatypes
|  |  |
| ORWPCE GET IMMUNIZATION TYPE | valid array param should return list of caret-delimited ien/label pairs
|  |  |
| ORWPCE GET SET OF CODES | valid object should return Set of Codes Array
|  |  |
| ORWPCE GET SKIN TEST TYPE | valid array param should return list of caret-delimited ien/label pairs
|  |  |
| ORWPCE1 NONCOUNT | invoking formatResult with Boolean false should return number equivalent 0
| ORWPCE1 NONCOUNT | invoking formatResult with Boolean true should return number equivalent 1
|  |  |
| ORWPS REASON | invoking formatResult with a valid array should return expected output as array of strings
| ORWPS REASON | invoking invokeRPC with empty arguments should return expected output as array of strings
|  |  |
| ORWPT CLINRNG | invokeRPC: any arg should return 0
| ORWPT CLINRNG | invokeRPC: empty arg should return 0
|  |  |
| ORWPT16 PSCNVT | invokeRPC: any arg should return 0
| ORWPT16 PSCNVT | invokeRPC: empty arg should return 0
|  |  |
| ORWSR SHOW SURG TAB | invoking formatResult with valid params should return 0 or 1
|  |  |
| ORWTPD1 GETEAFL | invoking invokeRPC with empty arguments should return empty string
|  |  |
| ORWTPD1 GETEDATS | Should format output objects if missing some values
| ORWTPD1 GETEDATS | Should handle negative cases where invalid results are passed in
| ORWTPD1 GETEDATS | Should properly handle output object formatting
|  |  |
| ORWTPO CSARNGD | invoking formatResult with TEST_INPUT should return specific output "T-365^T+90
|  |  |
| ORWTPO GETIMGD | no param should return semicolon-delimited string
|  |  |
| ORWU CLINLOC | formatResult: error Object should return empty array
| ORWU CLINLOC | formatResult: valid Object Array should return Array of formatted Strings
|  |  |
| ORWU DT | 'invokeRPC' called with argument(s) '0': result should be 'a number'
| ORWU DT | 'invokeRPC' called with argument(s) '01011999': result should be 'a number'
| ORWU DT | 'invokeRPC' called with argument(s) 'NOW': result should be 'a number'
|  |  |
| ORWU PARAM | specific string param should return expected parameter value
|  |  |
| ORWU TOOLMENU | no params should return tool menu list
|  |  |
| ORWU VALDT | 'invokeRPC' called with argument(s) '0': result should be 'a number'
| ORWU VALDT | 'invokeRPC' called with argument(s) 'NOW': result should be 'a number'
|  |  |
| ORWU VERSRV | 'invokeRPC' called with argument(s) 'OR CPRS GUI CHART 0': result should be 'a string'
| ORWU VERSRV | 'invokeRPC' called with argument(s) 'OR CPRS GUI CHART 1.0.30.69': result should be '1.0.30.75'
| ORWU VERSRV | 'invokeRPC' called with argument(s) 'OR CPRS GUI CHART 1.0.30.75': result should be '1.0.30.75'
|  |  |
| ORWU1 NEWLOC | formatResult: error Object should return empty array
| ORWU1 NEWLOC | formatResult: valid Object Array should return Array of formatted Strings
|  |  |
| TIU GET PRINT NAME | 'invokeRPC' called with argument(s) '0': result should be 'UNKNOWN'
| TIU GET PRINT NAME | 'invokeRPC' called with argument(s) '15': result should be 'CLINICAL WARNING'
| TIU GET PRINT NAME | 'invokeRPC' called with argument(s) '8': result should be 'ADVANCE DIRECTIVE'
|  |  |
| TIU TEMPLATE ACCESS LEVEL | formatResult: should only accept Object param
| TIU TEMPLATE ACCESS LEVEL | invoking formatResult with a valid Object input should return a value between 0 and 3
|  |  |
| TIU TEMPLATE GET DEFAULTS | invoking invokeRPC with empty arguments should return empty string
| TIU TEMPLATE GET DEFAULTS | invoking invokeRPC with null arguments should return error
| TIU TEMPLATE GET DEFAULTS | invoking invokeRPC with numeric arguments should return error
| TIU TEMPLATE GET DEFAULTS | invoking invokeRPC with string arguments should return error
|  |  |
| XUS GET USER INFO | formatResult: Should return specfic array information about a user
|  |  |
| XUS PKI GET UPN | 'invokeRPC' called with no arguments: result should be ''
|  |  |
| XWB GET BROKER INFO | formatResult: Should return specfic array containing brokerActivityTimeout in seconds
| XWB GET BROKER INFO | invokeRPC: Should return response object containing brokerActivityTimeout