---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; TIU USER CLASS LONG LIST
# TIU USER CLASS LONG LIST

Long List of User Classes

Property | Value
--- | ---
Label | CLSLIST
Routine | [TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FROM |  |  |  | 
DIR |  |  |  | 



### MUMPS Method Description

Property | Value
--- | ---
Method | [CLSLIST^TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html)
Method Comment | Long List of Active User Classes
Input Parameters | FROM, DIR
Code | {::nomarkdown}<pre><code> N I,IEN,CNT S I=0,CNT=44<br/> F  Q:(I'<CNT)  S FROM=$O(^USR(8930,"B",FROM),DIR) Q:(FROM="")  D<br/> . S IEN=$O(^USR(8930,"B",FROM,0)) I $P(^USR(8930,IEN,0),U,3)="0" Q<br/> . S I=I+1,ORY(I)=IEN_"^"_FROM</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}