---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDFH ISOLIST<br/>
# ORWDFH ISOLIST

Returns a list of active Isolation/Precaution Type (file #119.4) entries.

## Properties

Property | Value
--- | ---
Label | ISOLIST
Routine | [ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [ISOLIST^ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
Method Comment | Return list of active isolations/precautions
Code | {::nomarkdown}<pre><code> N I,X,IEN<br/> S I=0,X="" F  S X=$O(^FH(119.4,"B",X)) Q:X=""  S IEN=$O(^(X,0)) D<br/> . I '$D(^FH(119.4,IEN,"I")) S I=I+1,LST(I)=IEN_U_X</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODDiet.pas">Orders/rODDiet.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}