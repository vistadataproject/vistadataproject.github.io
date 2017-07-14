---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWRP2 COMPABV<br/>
# ORWRP2 COMPABV

This RPC returns an array of the ADHOC Health Summary components by abbreviation.

## Properties

Property | Value
--- | ---
Label | COMPABV
Routine | [ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [COMPABV^ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
Method Comment | Get ADHOD sub components listed by Abbreviation
Code | {::nomarkdown}<pre><code> N I,X,X1,X2,X3<br/> D COMP^GMTSADH5(.ORY)<br/> S I=0<br/> F  S I=$O(ORY(I)) Q:'I  S X=ORY(I) D<br/> . S X1=$P($P(X,"^",2),"["),X1=$E(X1,1,$L(X1)-1),X2=$P($P(X,"^",2),"[",2),X2=$E(X2,1,$L(X2)-1)<br/> . S X3=X2_"   - "_$P(X,"^",5)_" ",$P(ORY(I),"^",2)=X3</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas">rReports.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}