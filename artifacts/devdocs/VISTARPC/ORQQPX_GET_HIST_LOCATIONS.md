---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQPX GET HIST LOCATIONS<br/>
# ORQQPX GET HIST LOCATIONS

Returns a list of historical locations from the LOCATION file(#9999999.06).

## Properties

Property | Value
--- | ---
Label | HISTLOC
Routine | [ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
Return Type | GLOBAL ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [HISTLOC^ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
Method Comment | Returns a list of historical locations
Code | {::nomarkdown}<pre><code> N IDX,PTR,LINE,NAME<br/> K ^TMP("OR",$J,"LOC")<br/> S LST=$NA(^TMP("OR",$J,"LOC"))<br/> S (LINE,IDX)=0<br/> F  S IDX=$O(^AUTTLOC(IDX)) Q:'IDX  D<br/> .S PTR=+$G(^AUTTLOC(IDX,0))<br/> .I +PTR D<br/> ..;S NAME=$P($G(^DIC(4,PTR,0)),U)<br/> ..S NAME=$$GET1^DIQ(4,PTR,.01,"I")<br/> ..I NAME'="" D<br/> ...S LINE=LINE+1<br/> ...S ^TMP("OR",$J,"LOC",LINE)=PTR_U_NAME</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}