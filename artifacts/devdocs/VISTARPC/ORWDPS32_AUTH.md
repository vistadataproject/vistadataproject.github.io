---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDPS32 AUTH<br/>
# ORWDPS32 AUTH

Checks restrictions for entering inpatient meds.  If no restrictions, a 0is returned.  If there is a restriction, it is returned in the format:     1^restriction text 

## Properties

Property | Value
--- | ---
Label | AUTH
MUMPS Implementation | [ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [AUTH^ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html)
Method Comment | For inpatient meds, check restrictions
Input Parameters | PRV, ORDLOG
Code | {::nomarkdown}<pre><code> N NAME,AUTH,INACT,X,ORSDLOG,ORDL,A,IFN S VAL=0<br/> S NAME=$P($G(^VA(200,PRV,20)),U,2) S:'$L(NAME) NAME=$P(^(0),U)<br/> S X=$G(^VA(200,PRV,"PS")),AUTH=$P(X,U),INACT=$P(X,U,4)<br/> S ORDLOG=$G(ORDLOG),ORDL=""<br/> I ORDLOG?1"X".E S IFN=$E(ORDLOG,2,99),A=$P($G(^OR(100,+IFN,0)),"^",5) I $P(A,";",2)'=101.41 S ORDLOG=""<br/> I ORDLOG]"" S A=$P($G(^ORD(101.41,ORDLOG,0)),"^",5) I A]"" S ORDL=$P($G(^ORD(100.98,A,0)),"^",4)<br/> S ORSDLOG=$O(^ORD(101.41,"B","PSO SUPPLY",""))<br/> I 'AUTH!(INACT&(DT>INACT)) D  Q<br/> . I $G(ORDL)=ORSDLOG,$D(^XUSEC("ORSUPPLY",DUZ)) Q<br/> . S VAL="1^"_NAME_" is not authorized to write medication orders."<br/> I $D(^XUSEC("OREMAS",DUZ)),'$$GET^XPAR("ALL","OR OREMAS MED ORDERS") D  Q<br/> . S VAL="1^OREMAS key holders may not enter medication orders."</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}