---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; VPS PATIENT PRE-REGISTRATION
# VPS PATIENT PRE-REGISTRATION

There are  2 input parameters for the RPC call  sent by the Vetlink kiosk Pre-registration event.Inputs:  DFN and Status Code.Patient DFN -1st input parameter of the RPC call, required. Status Code - code that represents the outcome of the pre-registration interview with the patient, required.  List of possible codes that could be sent:B = BUSYC = CONNECTEDD = DEATHK = CALL BACKM =LEFT CALLBACK MESSAGEN = NO ANSWERP = NO PHONET = DON'T CALLU = UNCOOPERATIVEV = PREVIOUSLY UPDATEDW =WRONG NUMBERX = CHANGE INFORMATION Output:  string consisting of a single digit to denote success or failure of the pre-registration, followed by a short message:     1 if pre-registration was successful or 0 if there was a problem.Syntax to indicate success: VPSRES="1,Pre-Registration completed."Syntax to indicate a failure: VPSRES="0,Patient nof found." VPSRES="0,Invalid SSN for this patient." VPSRES="0,Unable to add Pre-Registration."

Property | Value
--- | ---
Label | PREREG
Routine | [VPSRPC3](http://code.osehra.org/dox/Routine_VPSRPC3_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 30 | true | Input: the patient&#x27;s internal entry number (IEN) from file #2. Only one DFN is allowed to be passed in, required.
VPSCST | LITERAL | 1 | true | Input: the call status code, either &#x27;C&#x27; (Connected) or &#x27;X&#x27; (Change Information), required.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}