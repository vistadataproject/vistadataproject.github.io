---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU FIELD LIST ADD<br/>
# TIU FIELD LIST ADD

Takes in the XML string, in the format XMLSET(1)=" <TEMPLATE_FIELDS>" and merges them with the global ^TMP("TIUFLDXML",$J).  If the subscript is 1,then it KILLs the global before it merges.  This routine is used so verylarge lists of fields can be processed without many calls to the database.

## Properties

Property | Value
--- | ---
Label | XFLDLD
MUMPS Implementation | [TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
XMLSET | LIST |  |  | Input in the format of XMLSET(1)&#x3D;&quot;&lt;FIELD NAME&#x3D;&quot;12345&quot;&gt;&quot;
XMLIN | LIST |  |  | 



## MUMPS Method Description

Property | Value
--- | ---
Method | [XFLDLD^TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html)
Method Comment | RESETS/UPDATES THE TMP(&quot;TIUFLDXML&quot;,$J) GLOBAL
Input Parameters | IN
First Comment | {::nomarkdown}<pre><code>WITH THE STRING PASSED IN "IN".  IF THE 1ST LINE IS SUBSCRIPTED<br/>AS 1, THE PROGRAM CLEARS THE TMP GLOBAL FIRST.  RETURNS "1" IF<br/>THIS CALL WAS SUCCESSFUL, "0" OTHERWISE.</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N X<br/> S X=0<br/> S X=$O(IN(X))<br/> I +X=1 K ^TMP("TIUFLDXML",$J)<br/> M ^TMP("TIUFLDXML",$J)=IN<br/> S RESULT(1)=1</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Templates/rTemplates.pas">Templates/rTemplates.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}