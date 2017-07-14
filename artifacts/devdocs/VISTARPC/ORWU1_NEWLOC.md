---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWU1 NEWLOC<br/>
# ORWU1 NEWLOC

Returns a list of Clinics, Wards, and "Other" category entries from the HOSPITAL LOCATION (#44) file.

## Properties

Property | Value
--- | ---
Label | NEWLOC
Routine | [ORWU1](http://code.osehra.org/dox/Routine_ORWU1_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [NEWLOC^ORWU1](http://code.osehra.org/dox/Routine_ORWU1_source.html)
Method Comment | Return &quot;CZ&quot; locations from HOSPITAL LOCATION file.
Input Parameters | ORFROM, DIR
First Comment | {::nomarkdown}<pre><code> C=Clinics, Z=Other, screened by $$ACTLOC^ORWU.<br/> .Y=returned list, ORFROM=text to $O from, DIR=$O direction.</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N I,IEN,CNT S I=0,CNT=44<br/> F  Q:I'<CNT  S ORFROM=$O(^SC("B",ORFROM),DIR) Q:ORFROM=""  D  ; IA# 10040.<br/> . S IEN="" F  S IEN=$O(^SC("B",ORFROM,IEN),DIR) Q:'IEN  D<br/> . . Q:("C"'[$P($G(^SC(IEN,0)),U,3)!('$$ACTLOC^ORWU(IEN)))<br/> . . S I=I+1,Y(I)=IEN_"^"_ORFROM<br/></code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}