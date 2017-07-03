---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIV SEND ALERT
# DSIV SEND ALERT

RPC to send a user a kernal alert

Property | Value
--- | ---
Label | SEND
Routine | [DSIVXQA](http://code.osehra.org/dox/Routine_DSIVXQA_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LIST |  | true | DATA is a list which is expecting data in the following format: DATA(sub) &#x3D; value  subscript  required  value  ---------  --------  ---------------------------------------  XQAMSG        Y      message displayed to the user (80 char)   XQAROU        N      tag^routine to be invoked                       if from RPC this must be silent   XQAID         N      package identifier for alert   XQADATA       N      an application specific data string     [the alert processor will set XQADATA equal to this and will      be available to M routine specified in XQAROU]   XQAARCH       N      # days to keep in alert tracking file   XQASURO       N      # days to wait before forwarding alert     [forwarded to recipient&#x27;s Mailman&#x27;s surrogates if unprocessed      by recipient]   XQASUPV       N      supervisor forwarding     [# days to wait before forwarding to recipient&#x27;s supervisor if      unprocessed by recipient.  SUPERVIOR &#x3D; CHIEF field from file      49 corresponding to recipient&#x27;s SERVICE/SECTION]   DFN           N      pointer to PATIENT file     [used to construct XQAID so that it works properly in CPRS]   PKG           N      namespace of calling app - default&#x3D;VEJD   Rn            Y      at least one must be defined - recipients of  R1,R2,R3,...          alert - can be pointer to NEW PERSON file                        or G.&lt;name of mail group&gt;  Example of setup in the GUI:  Param.List[&#x27;&quot;XQAMSG&quot;&#x27;] :&#x3D; text  Param.list[&#x27;&quot;R1&quot;&#x27;]     :&#x3D; duz of recipient  Param.List[&#x27;&quot;DFN&quot;&#x27;]    :&#x3D; pointer to PATIENT file



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}