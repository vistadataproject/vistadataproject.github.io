---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; GMV PARAMETER<br/>
# GMV PARAMETER

Sets and retrieves parameter values used by the graphical user interface. This remote procedure call is documented in Integration Agreement 4367.

## Properties

Property | Value
--- | ---
Label | RPC
MUMPS Implementation | [GMVPAR](http://code.osehra.org/dox/Routine_GMVPAR_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
OPTION | LITERAL | 10 | true | Routine tag line to call.
ENT | LITERAL |  |  | The entity value to use. See Integration Agreement 2263 and FILE 8989.518for a list of entity values.
PAR | LITERAL |  |  | The parameter value to use. See FILE 8989.51 for a list of parametervalues. This value must start with the letters &quot;GMV&quot; (no quotes).
INST | LITERAL |  |  | The instance to use. 
VAL | LITERAL |  |  | The value assigned to a parameter. Values are stored in FILE 8989.5.



## MUMPS Method Description

Property | Value
--- | ---
Method | [RPC^GMVPAR](http://code.osehra.org/dox/Routine_GMVPAR_source.html)
Method Comment | [Procedure] Main RPC Hit Point
Input Parameters | OPTION, ENT, PAR, INST, VAL
First Comment | {::nomarkdown}<pre><code> RPC: [GMV PARAMETER]<br/><br/> Requires that the parameter name in PAR<br/> be in the GMV namespace.<br/><br/> Input parameters<br/>  1. RESULTS [Literal/Required] No description<br/>  2. OPTION [Literal/Required] No description<br/>  3. ENT [Literal/Required] No description<br/>  4. PAR [Literal/Required] No description<br/>  5. INST [Literal/Required] No description<br/>  6. VAL [Literal/Required] No description<br/></code></pre>{:/}
Code | {::nomarkdown}<pre><code> N ERR,TMP,RET,TXT,IEN,IENS,ROOT<br/> S INST=$G(INST,1)<br/> S PAR=$G(PAR,"GMV")<br/> S RESULTS=$NA(^TMP($J)) K @RESULTS<br/> I PAR'?1"GMV".E S ^TMP($J,0)="-1^Non Vitals Measurements Parameter" Q<br/> D:$T(@OPTION)]"" @OPTION<br/> I +$G(ERR) K @RESULTS S @RESULTS@(0)="-1^Error: "_(+ERR)_" "_$P(ERR,U,2)<br/> I '$D(^TMP($J)) S @RESULTS@(0)="-1^No date returned"<br/> D CLEAN^DILF</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
DLL File | {::nomarkdown}No Source Code Available (GMV_VitalsViewEnter.dll){:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}