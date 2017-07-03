---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDCN32 PROCEDURES
# ORWDCN32 PROCEDURES

Returns a list of orderable procedures.  Same as ORDITM^ORWDX except: 1.  Checks inactive date in file 101.43 against NOW instead of DT.2.  Checks for at least one service that can perform the procedure.3.  Returns variable pointer to procedure in 4th piece of each item.

Property | Value
--- | ---
Label | PROC
Routine | [ORWDCN32](http://code.osehra.org/dox/Routine_ORWDCN32_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
start | LITERAL | 16 |  | 
direction | LITERAL | 16 |  | 



### MUMPS Method Description

Property | Value
--- | ---
Method | [PROC^ORWDCN32](http://code.osehra.org/dox/Routine_ORWDCN32_source.html)
Method Comment | Return a subset of orderable procedures
Input Parameters | FROM, DIR
First Comment | {::nomarkdown}<pre><code> .Return Array, Starting Text, Direction<br/> ^ORD(101.43,"S.PROC",UpperCase,DA)=Mne^MixedCase^InactvDt^.01IfMne<br/> Y(n)=IEN^.01 Name^.01 Name  -or-  IEN^Synonym <.01 Name>^.01 Name</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N I,IEN,CNT,X,DTXT,ORID,ORSVCCNT S I=0,CNT=44<br/> F  Q:I'<CNT  S FROM=$O(^ORD(101.43,"S.PROC",FROM),DIR) Q:FROM=""  D<br/> . S IEN=0 F  S IEN=$O(^ORD(101.43,"S.PROC",FROM,IEN)) Q:'IEN  D<br/> . . S X=^ORD(101.43,"S.PROC",FROM,IEN)<br/> . . I +$P(X,U,3),$P(X,U,3)<$$NOW^XLFDT Q  ;ICR 10103<br/> . . S ORID=$P($G(^ORD(101.43,IEN,0)),U,2)<br/> . . ;I $P($G(^ORD(101,ORIEN,0)),U,3)'="" Q   ; Removed for v14<br/> . . D GETSVC^GMRCPR0(.ORSVCCNT,ORID) Q:+ORSVCCNT=0  ;ICR 2982<br/> . . S I=I+1<br/> . . I 'X S Y(I)=IEN_U_$P(X,U,2)_U_$P(X,U,2)_U_ORID<br/> . . E  S Y(I)=IEN_U_$P(X,U,2)_$C(9)_"<"_$P(X,U,4)_">"_U_$P(X,U,4)_U_ORID</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}