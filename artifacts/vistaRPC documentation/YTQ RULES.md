---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; YTQ RULES 

 property | value 
--- | --- 
 label | YTQ RULES
 tag | RULES
 routine | [YTQAPI1](http://code.osehra.org/dox/Routine_YTQAPI1_source.html)
 return value type | ARRAY
 description | Returns all the Rules for a specified Instrument Input: YS(\CODE\)= test name Output:        YSDATA(1)=[DATA]        YSDATA(x): RULE ID= IndexQuestion^IndexValue^ IndexValueDataType                  ^IndexOperator^BoolOperator^TargetQuestion        YSDATA(x+1):TargetValue^TargetValueDataType^ TargeOperator        YSDATA(X+2):MessageText^IsConsistencyCheck