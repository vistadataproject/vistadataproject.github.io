---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; YTQ RULES<br/>
# YTQ RULES

Returns all the Rules for a specified Instrument Input: YS("CODE")= test name Output:        YSDATA(1)=[DATA]        YSDATA(x): RULE ID= IndexQuestion^IndexValue^ IndexValueDataType                  ^IndexOperator^BoolOperator^TargetQuestion        YSDATA(x+1):TargetValue^TargetValueDataType^ TargeOperator        YSDATA(X+2):MessageText^IsConsistencyCheck

## Properties

Property | Value
--- | ---
Label | RULES
Routine | [YTQAPI1](http://code.osehra.org/dox/Routine_YTQAPI1_source.html)
Return Type | ARRAY




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}