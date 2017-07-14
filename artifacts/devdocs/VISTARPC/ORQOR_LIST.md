---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQOR LIST<br/>
# ORQOR LIST

Returns a list of patient orders.

## Properties

Property | Value
--- | ---
Label | LIST
Routine | [ORQOR1](http://code.osehra.org/dox/Routine_ORQOR1_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT | LITERAL | 16 | true | Patient DFN from Patient file [#2].
GROUP | LITERAL | 16 | true | Entry number of the desired display group from the Display Group File [#100.98].
FLAG | LITERAL | 16 | true | Flag identifying the context of the orders to be retreived.
STARTDATE | LITERAL | 16 | true | The startdate for the order search in &#x27;T&#x27; or Fileman format.Startdate is only considered when FLAG is &#x27;1&#x27; (return all orders).
STOPDATE | LITERAL | 16 | true | The stopdate for the order search in &#x27;T&#x27; or Fileman format.Stopdate is only considered when FLAG is &#x27;1&#x27; (return all orders).



## MUMPS Method Description

Property | Value
--- | ---
Method | [LIST^ORQOR1](http://code.osehra.org/dox/Routine_ORQOR1_source.html)
Method Comment | return list of patient orders
Input Parameters | PATIENT, GROUP, FLAG, ORSDT, OREDT, ORXREF, GETKID
First Comment | {::nomarkdown}<pre><code> return PATIENT's orders for a display GROUP of type FLAG<br/> between start (ORSDT) and end dates (OREDT)<br/> dates can be in Fileman or T, T-14 formats</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N GIEN S GIEN=""<br/> I $L($G(ORSDT)) D DT^DILF("T",ORSDT,.ORSDT,"","")<br/> I $L($G(OREDT)) D DT^DILF("T",OREDT,.OREDT,"","")<br/> I (ORSDT=-1)!(OREDT=-1) S ORY(1)="^Error in date range." Q<br/> S PATIENT=PATIENT_";DPT("<br/> S:$L($G(GROUP)) GIEN=$O(^ORD(100.98,"B",GROUP,GIEN))<br/> K ^TMP("ORR",$J)<br/> D EN^ORQ1(PATIENT,GIEN,FLAG,"",ORSDT,OREDT,1,0,$G(ORXREF),$G(GETKID))<br/> N J,HOR,SEQ,X S J=1,HOR=0,SEQ=0<br/> S HOR=$O(^TMP("ORR",$J,HOR)) Q:+HOR<1<br/> F  S SEQ=$O(^TMP("ORR",$J,HOR,SEQ)) Q:+SEQ<1  D<br/> .S X=^TMP("ORR",$J,HOR,SEQ)<br/> .S ORY(J)=$P(X,U)_U_$E(^TMP("ORR",$J,HOR,SEQ,"TX",1),1,60)_U_$P(X,U,4)_U_$P(X,U,6),J=J+1<br/> K ^TMP("ORR",$J)<br/> S:+$G(ORY(1))<1 ORY(1)="^No orders found."</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}