---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWU16 DEVICE
# ORWU16 DEVICE



Property | Value
--- | ---
Label | DEVICE
Routine | [ORWU16](http://code.osehra.org/dox/Routine_ORWU16_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [DEVICE^ORWU16](http://code.osehra.org/dox/Routine_ORWU16_source.html)
Method Comment | Return a list of devices
Code | {::nomarkdown}<pre><code> S I=0,DEV=""<br/> F  S DEV=$O(^%ZIS(1,"B",DEV)) Q:DEV=""  S IEN=$O(^(DEV,0)) D<br/> . I $E($G(^%ZIS(2,+$G(^%ZIS(1,IEN,"SUBTYPE")),0)))'="P" Q<br/> . I $P($G(^%ZIS(1,IEN,0)),U,12)=2 Q<br/> . S I=I+1,Y(I)=IEN_";"_$P(^%ZIS(1,IEN,0),U)_U_DEV_U_$P($G(^(1)),U)_U_$P($G(^(90)),U)_U_$P(^(91),U)_U_$P(^(91),U,3)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}N/A{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}