---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; OREVNTX1 ISDCOD<br/>
# OREVNTX1 ISDCOD



## Properties

Property | Value
--- | ---
Label | ISDCOD
Routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [ISDCOD^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
Method Comment | True: the order need to be filtered out
Input Parameters | ORIFN
Code | {::nomarkdown}<pre><code> N PAS,X3,X0,ORGRPLST,THEGRP,IDX,ODGRP<br/> S (ORY,IDX)=0<br/> Q:'$D(^OR(100,+ORIFN,0))<br/> S X0=$G(^OR(100,+ORIFN,0))<br/> S ODGRP=$P(X0,U,11)<br/> D GETLST^XPAR(.ORGRPLST,"ALL","OREVNT EXCLUDE DGRP")<br/> F  S IDX=$O(ORGRPLST(IDX)) Q:'IDX!ORY  D<br/> . S THEGRP=$P($G(ORGRPLST(IDX)),U,2)<br/> . I $$GRPCHK(THEGRP,ODGRP) S ORY=1<br/> I ORY Q<br/> S PAS=";1;2;7;13;"  ;*347 Update Filter<br/> S:$D(^OR(100,+ORIFN,3)) X3=^OR(100,+ORIFN,3)<br/> S:(PAS[(";"_$P(X3,U,3)_";")) ORY=1</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Executable Only | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}