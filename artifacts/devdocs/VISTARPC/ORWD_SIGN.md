---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWD SIGN<br/>
# ORWD SIGN

Changes signature status on a list of orders and optionally releases theorders to their respective services.

## Properties

Property | Value
--- | ---
Label | SIGN
MUMPS Implementation | [ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [SIGN^ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html)
Method Comment | procedure
Input Parameters | DFN, ORNP, LOC, ORWSIGN
First Comment | {::nomarkdown}<pre><code> Sign orders (ORIFN;ACT^RELSTS^SIGSTS^NATR)</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N ORVP,ORL,IDX,ANERROR,ERRCNT<br/> S ORVP=DFN_";DPT(",ORL(2)=LOC_";SC(",ORL=ORL(2),ERRCNT=0<br/> I '$D(^XUSEC("ORES",DUZ)) S ERRLST(1)=0_U_"Must have ORES key." Q<br/> S IDX=0 F  S IDX=$O(ORWSIGN(IDX)) Q:'IDX  S X=ORWSIGN(IDX) D<br/> . ; ** change NATR when GUI changed to pass Nature in 4th piece<br/> . S ORIFN=$P(X,U),RELSTS=$P(X,U,2),SIGSTS=$P(X,U,3),NATR="E" ;$P(X,U,4)<br/> . I SIGSTS=2 D NOTIF^ORCSIGN S ANERROR=""<br/> . I SIGSTS'=2 D EN^ORCSEND(ORIFN,"",SIGSTS,RELSTS,NATR,"",.ANERROR)<br/> . I $L(ANERROR) D  Q           ; don't print if an error occurred<br/> . . S ERRCNT=ERRCNT+1,ERRLST(ERRCNT)=$P(ORWSIGN(IDX),U)_U_ANERROR<br/> . . K ORWSIGN(IDX)<br/> . I RELSTS=0 K ORWSIGN(IDX) Q  ; don't print if unreleased<br/> . S ORWSIGN(IDX)=$P(ORWSIGN(IDX),U)<br/> D PRINTS^ORWD1(.ORWSIGN,LOC)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}