---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDOR LKSCRN
# ORWDOR LKSCRN

Does a lookup similar to GENERIC^ORWU.  Also allows passing of a referenceto a screen in the Order Dialog file to screen to lookup.

Property | Value
--- | ---
Label | LKSCRN
Routine | [ORWDOR](http://code.osehra.org/dox/Routine_ORWDOR_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [LKSCRN^ORWDOR](http://code.osehra.org/dox/Routine_ORWDOR_source.html)
Method Comment | Return a set of entries from xref in REF
Input Parameters | FROM, DIR, REF, GBL, SCR
First Comment | {::nomarkdown}<pre><code> .Y=returned list, FROM=text to $O from, DIR=$O direction,<br/> REF=subscript indirection global ref including xref,<br/> GBL=standard FM global ref, SCR=reference to screen in 101.41</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N I,IEN,CNT,X,Y,D,ORTYPE<br/> S I=0,CNT=44,SCR=$G(SCR)<br/> I $L(SCR) S SCR=$G(^ORD(101.41,+SCR,10,+$P(SCR,":",2),4))<br/> S D=$P(REF,"""",2),ORTYPE="D" ;for OI screen<br/> F  Q:I'<CNT  S FROM=$O(@REF@(FROM),DIR) Q:FROM=""  D<br/> . S IEN=0 F  S IEN=$O(@REF@(FROM,IEN)) Q:'IEN  D<br/> . . ; if screen, set naked ref & Y, then execute screen<br/> . . I $L(SCR) S Y=IEN,X=$P($G(@(GBL_"Y,0)")),U) X SCR Q:'$T<br/> . . S I=I+1,ORLST(I)=IEN_"^"_FROM</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}