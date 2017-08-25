---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWU CLINLOC<br/>
# ORWU CLINLOC

Returns a list of clinics from the HOSPITAL LOCATION file (#44).

## Properties

Property | Value
--- | ---
Label | CLINLOC
MUMPS Implementation | [ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [CLINLOC^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
Method Comment | Return a set of clinics from HOSPITAL LOCATION
Input Parameters | FROM, DIR
First Comment | {::nomarkdown}<pre><code> .Y=returned list, FROM=text to $O from, DIR=$O direction,</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N I,IEN,CNT S I=0,CNT=44<br/> F  Q:I'<CNT  S FROM=$O(^SC("B",FROM),DIR) Q:FROM=""  D  ; IA# 10040.<br/> . S IEN="" F  S IEN=$O(^SC("B",FROM,IEN),DIR) Q:'IEN  D<br/> . . I ($P($G(^SC(IEN,0)),U,3)'="C")!('$$ACTLOC(IEN)) Q<br/> . . S I=I+1,Y(I)=IEN_"^"_FROM</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}