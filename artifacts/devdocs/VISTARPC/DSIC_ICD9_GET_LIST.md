---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC ICD9 GET LIST<br/>
# DSIC ICD9 GET LIST

This will return a list of active ICD9 codes for a lookup value.

## Properties

Property | Value
--- | ---
Label | LIST
MUMPS Implementation | [DSICDRG](http://code.osehra.org/dox/Routine_DSICDRG_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DSIX | LITERAL | 50 | true |  Old method of calling this procedure:    This is the Lexicon lookup value.  New method of calling this procedure:    Under the new method this parameter would be set to NULL.  Please see parameter DSIA details on new call procedure.
SCR | LITERAL | 1 | true |  Old method of calling this procedure:    If SCR&#x3D;&quot;P&quot;, then the matches to the lookup value will be screened    to only return diagnoses which are acceptable as principal diagnoses.  New method of calling this procedure:    Under the new method SCR would be set to NULL.  Please see parameter DSIA for details on new calling procedure.
DSIA | LIST |  | true |  New method for calling this subroutine:     An input array &quot;DSIA&quot; will have to be set up in following format:       DSIA(0) &#x3D; &quot;LOOKUP^Value&quot;            user input lookup value     DSIA(1) &#x3D; &quot;CHKSCR^Value&quot;            If value set to &quot;P&quot;, only valid ICD9 codes that are eligible            to be principle diagnosis will be returned.     DSIA(2) &#x3D; &quot;ACTDATE^Value&quot; (ACTDATE is in Fileman format, NULL dates            will be set to Today) The eligibility date of the ICD9 code.     DSIA(3) &#x3D; &quot;MAX^Value&quot; (100 is the default)             The maximum number of diagnosis you want returned.           TOTALS &#x3D; RR(0)&#x3D; P1^P2 - Will only be returned for new call                                  method                    P1 &#x3D; # of codes returned                    P2 &#x3D; total number of codes considered               Example:                    DSIX - Leave NULL                    SCR  - Leave NULL                    SS(0)&#x3D;&quot;LOOKUP^137&quot;                    SS(1)&#x3D;&quot;CHKSCR^P&quot;                    SS(2)&#x3D;&quot;ACTDATE^&quot;                    SS(3)&#x3D;&quot;MAX^N&quot;              D LIST^DSICDRG(.RR,,,.SS)  Return: RR &#x3D;&quot;^TMP(&quot;DSIC&quot;,5876)&quot;



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}