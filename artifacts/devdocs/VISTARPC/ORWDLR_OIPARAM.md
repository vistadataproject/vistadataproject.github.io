---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDLR OIPARAM
# ORWDLR OIPARAM

No longer used.

Property | Value
--- | ---
Label | LOAD
Routine | [ORWDLR](http://code.osehra.org/dox/Routine_ORWDLR_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [LOAD^ORWDLR](http://code.osehra.org/dox/Routine_ORWDLR_source.html)
Method Comment | procedure
Input Parameters | TESTID
First Comment | {::nomarkdown}<pre><code> Return sample, specimen, & urgency info about a lab test</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N X,Y,ILST,PARAM S ILST=0<br/> S LST($$NXT)="~Test Name="_$P(^ORD(101.43,TESTID,0),U,1)<br/> I $D(^ORD(101.43,TESTID,8))>1 S LST($$NXT)="~OIMessage"<br/> S I=0 F  S I=$O(^ORD(101.43,TESTID,8,I)) Q:'I  S LST($$NXT)="t"_^(I,0)<br/> S TESTID=+$P(^ORD(101.43,TESTID,0),U,2)<br/> D TEST^LR7OR3(TESTID,.Y)<br/> S PARAM="" F  S PARAM=$O(Y(PARAM)) Q:PARAM=""  D<br/> . S LST($$NXT)="~"_PARAM_$S($D(Y(PARAM))>1:"",1:"="_$G(Y(PARAM)))<br/> . I $D(Y(PARAM))>1 S I=0 F  S I=$O(Y(PARAM,I)) Q:'I  D<br/> . . I PARAM="Specimens" S LST($$NXT)="i"_Y(PARAM,I) Q<br/> . . I PARAM="Urgencies" S LST($$NXT)="i"_Y(PARAM,I) Q<br/> . . S LST($$NXT)="i"_I_U_Y(PARAM,I)<br/> . . I PARAM="CollSamp" D<br/> . . . I $G(Y("Lab CollSamp")) S $P(LST(ILST),U,8)=1<br/> . . . S X=+$P(Y(PARAM,I),U,3)<br/> . . . I X S $P(LST(ILST),U,10)=$P($G(^LAB(61,X,0)),U,1)<br/> . . I $D(Y(PARAM,I,"WP")) S J=0 F  S J=$O(Y(PARAM,I,"WP",J)) Q:'J  D<br/> . . . S LST($$NXT)="t"_Y(PARAM,I,"WP",J,0)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}N/A{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}