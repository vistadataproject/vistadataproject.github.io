---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; SPN LAB UTL SPECIFIC
# SPN LAB UTL SPECIFIC



Property | Value
--- | ---
Label | RPC
Routine | [SPNLRR7](http://code.osehra.org/dox/Routine_SPNLRR7_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FDATE | LITERAL |  |  | DATE TO START REPORT
TDATE | LITERAL |  |  | DATE TO END AT
HIUSERS | LITERAL |  |  | 0 JUST LABS AND STATS1 TO SEE PATIENT USAGE DATA
VALUES | LIST |  |  | EXAMPLE OF WHAT IS IN THE QLIST        S QLIST(605143)&#x3D;&quot;HGB&quot;        S QLIST(605144)&#x3D;&quot;HCT&quot;        S QLIST(605682)&#x3D;&quot;K (OR)&quot;
PTLIST | LIST |  |  | ICN^ICN^ICN^.... Example                  10073051^10052887^10147361^20638^8368^10005030^10017220



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}