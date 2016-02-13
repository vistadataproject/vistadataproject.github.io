---
layout: default
title: ORQQPL RPCs
---


# ORQQPL RPCs

## ORQQPL ADD SAVE

Add new problem record


Function | Return Value | Availability
--- | --- | --- | ---
ADDSAVE^ORQQPL1 | SINGLE VALUE | -


## ORQQPL AUDIT HIST

RETURN PROBLEM AUDIT HISTORY


Function | Return Value | Availability
--- | --- | --- | ---
HIST^ORQQPL2 | ARRAY<br><br>ARRAY OF PROBLEM HISTORIES IN DISPLAYABLE TEXT FORMAT | -


## ORQQPL CHECK DUP


Function | Return Value | Availability
--- | --- | --- | ---
DUP^ORQQPL1 | SINGLE VALUE<br><br>ifn^status, or 0 if not found | -


## ORQQPL CLIN FILTER LIST

rETURNS ARRAY OF IEN^NAME FOR AN ARRAY OF IEN PASSED IN


Function | Return Value | Availability
--- | --- | --- | ---
GETCLIN^ORQQPL3 | ARRAY<br><br>ARRAY OF IEN^NAME | -


## ORQQPL CLIN SRCH

Returns list of clinics for problem list. Should be replaced by CLIN^ORQPT


Function | Return Value | Availability
--- | --- | --- | ---
CLINSRCH^ORQQPL1 | ARRAY | -


## ORQQPL DELETE

DELETES A PROBLEM


Function | Return Value | Availability
--- | --- | --- | ---
DELETE^ORQQPL2 | SINGLE VALUE | -


## ORQQPL DETAIL

Function returns a string of detailed information for a problem.


Function | Return Value | Availability
--- | --- | --- | ---
DETAIL^ORQQPL | ARRAY<br><br>String of detailed problem information delimited by "^".  String includes:<under discussion> | SUBSCRIPTION


## ORQQPL EDIT LOAD

Return array of default fields and original fields - GMPFLD() and GMPORIG()


Function | Return Value | Availability
--- | --- | --- | ---
EDLOAD^ORQQPL1 | ARRAY | -


## ORQQPL EDIT SAVE

sAVES EDITED PROBLEM RECORD


Function | Return Value | Availability
--- | --- | --- | ---
EDSAVE^ORQQPL1 | SINGLE VALUE<br><br>BOOLEAN 1= FILE OK, 0 NO FILE | -


## ORQQPL INACTIVATE


Function | Return Value | Availability
--- | --- | --- | ---
INACT^ORQQPL2 | ARRAY | -


## ORQQPL INIT PT

returns death indicator, sc and exposures


Function | Return Value | Availability
--- | --- | --- | ---
INITPT^ORQQPL1 | ARRAY | -


## ORQQPL INIT USER

Returns user parameters for problem list


Function | Return Value | Availability
--- | --- | --- | ---
INITUSER^ORQQPL1 | ARRAY | -


## ORQQPL LIST

Function returns a list of problems for a patient.


Function | Return Value | Availability
--- | --- | --- | ---
LIST^ORQQPL | ARRAY<br><br>Array of patient problems in the format: problem id^problem name^status | SUBSCRIPTION


## ORQQPL PROB COMMENTS

Returns a list of comments associated with a problem IEN.


Function | Return Value | Availability
--- | --- | --- | ---
GETCOMM^ORQQPL2 | ARRAY | -


## ORQQPL PROBLEM LEX SEARCH

Get a list from clinical lexicon for display in list or combo box


Function | Return Value | Availability
--- | --- | --- | ---
LEXSRCH^ORQQPL1 | ARRAY<br><br>LSTARY | -


## ORQQPL PROBLEM LIST

Problem list for CPRS GUI client


Function | Return Value | Availability
--- | --- | --- | ---
PROBL^ORQQPL3 | ARRAY<br><br>List of problems with comments | -


## ORQQPL PROBLEM NTRT BULLETIN

This RPC generates a bulletin to the OR CAC Mail Group, indicating that an unresolved term needs to be requested using the New Term Rapid Turnaround website at http://hdrmul7.aac.domain.ext:7151/ntrt/.


Function | Return Value | Availability
--- | --- | --- | ---
NTRTBULL^ORQQPL2 | SINGLE VALUE<br><br>Boolean. Return true (1) if the bulletin was successfully generated, orfalse (0^explanatory text) if the bulletin could not be generated. | SUBSCRIPTION


## ORQQPL PROV FILTER LIST

RETURNS A LIST OF PROVIDERS CORRESPONDING TO INPUT ARRAY OF IEN


Function | Return Value | Availability
--- | --- | --- | ---
GETRPRV^ORQQPL3 | ARRAY | -


## ORQQPL PROVIDER LIST

RETURNS ARRAY OF PROVIDERS MATCHING INPUT


Function | Return Value | Availability
--- | --- | --- | ---
PROVSRCH^ORQQPL1 | ARRAY | -


## ORQQPL REPLACE

REPLACES A PROBLEM THAT WAS PREVIOUSLY DELETED


Function | Return Value | Availability
--- | --- | --- | ---
REPLACE^ORQQPL2 | SINGLE VALUE | -


## ORQQPL SAVEVIEW

Saves preferred view (inpatient/outpatient) and list of preferredclinics/services to NEW PERSON file, field 125.nn.  Also sets value ofparameter [ORCH CONTEXT PROBLEMS], which controls the default status ofthe problems shown, as well as whether comments should be displayed.Preferences take effect for both GUI and List Manager, and can be changedfrom either interface.


Function | Return Value | Availability
--- | --- | --- | ---
SAVEVIEW^ORQQPL2 | ARRAY | -


## ORQQPL SERV FILTER LIST

RETURNS ARRAY OF IEN^NAME FOR INPUT ARRAY OF IEN


Function | Return Value | Availability
--- | --- | --- | ---
GETSRVC^ORQQPL3 | ARRAY | -


## ORQQPL SRVC SRCH

gET LIST OF AVAILABLE SERVICES


Function | Return Value | Availability
--- | --- | --- | ---
SRVCSRCH^ORQQPL1 | ARRAY<br><br>ARRAY OF IEN^NAME | -


## ORQQPL UPDATE

Updates problem record


Function | Return Value | Availability
--- | --- | --- | ---
UPDATE^ORQQPL1 | ARRAY | -


## ORQQPL USER PROB CATS

rETURNS ARRAY OF CATEGORIES FOR USER TO SELECT FROM


Function | Return Value | Availability
--- | --- | --- | ---
CAT^ORQQPL3 | ARRAY<br><br>ARRAY OF CATEGORIES | -


## ORQQPL USER PROB LIST

Returns array of user specific problems to select from


Function | Return Value | Availability
--- | --- | --- | ---
PROB^ORQQPL3 | ARRAY | -


## ORQQPL VERIFY

VERIFY A TRANSCRIBED PROBLEM


Function | Return Value | Availability
--- | --- | --- | ---
VERIFY^ORQQPL2 | SINGLE VALUE | -


## ORQQPL4 LEX

This RPC supports the Clinical Lexicon Search for Problem List. It will return an indefinite list of terms that match the user's search string.


Function | Return Value | Availability
--- | --- | --- | ---
LEX^ORQQPL4 | GLOBAL ARRAY | SUBSCRIPTION


