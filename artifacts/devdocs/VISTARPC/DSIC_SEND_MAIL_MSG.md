---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC SEND MAIL MSG<br/>
# DSIC SEND MAIL MSG

This will send a Mailman message

## Properties

Property | Value
--- | ---
Label | SEND
MUMPS Implementation | [DSICXM](http://code.osehra.org/dox/Routine_DSICXM_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ARR | LIST | 250 | true | This array contains all the data needed to invoke Mailman&#x27;s send a message API.  ARR format:  ARR(sub) &#x3D; p1 ^ p2  where   sub &#x3D; any subscript value [0,1,2,3,...]    p1 &#x3D; parameter name indicating the mail api entity    p2 &#x3D; the value of the parameter p1            Req/   p1      Opt   p2 (and description)---------  ----  ------------------------------------------------------- FLAGS     opt   string of characters representing special instructions                  P :&#x3D; priority   I :&#x3D; informational only    X :&#x3D; closed                  C :&#x3D; confidential   R :&#x3D; confirm receipt  FROM      opt   default to DUZ - sender of message SELF BSKT  opt   if FROM&#x3D;DUZ then this canbe the name of DUZ&#x27;s mail                 basket to deliver the message [basket must already exist]  VAPOR     opt   Fileman date.time for which thismessage should be deleted                 from recipient&#x27;s mail baskets   SUBJ     req   subject of the message [3-65 characters]  NOTME     opt   if this equals 1, then DO NOT include user DUZ as a                 recipient. Otherwise DUZ will always be a recipient even                 if they are not included in the recipient list    REC     opt   this is only optional if the mail message will include                 DUZ as a recipient.  These are the recipients of the                 message.   Acceptable values are:                     DUZ number                     G.mail group name                     D.VistA device name                     S.server name                 For DUZ and mail group recipients there are additional                 parameters you can use as prefixes to the recipient:                     I: - indicate this recipient is informational only                     C: - indicate that this recipient is carbon copy (cc)                     L@Fileman_date.time: - deliver this message to this                       recipient at the specified date.time                 Examples: for user 1301 -   I:1301                           C:G.IRM STAFF                           IL@3021224.23:G.MCCR   TEXT     req   text of message.  Each line of text will be a separate                 ARR(sub) entry.  No line should exceed 80 characters.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}