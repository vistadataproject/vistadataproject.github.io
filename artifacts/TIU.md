---
layout: default
title: TIU RPCs
---


# TIU RPCs

## TIU AUTHORIZATION

This RPC allows the calling application to evaluate privilege to performany ASU-mediated action on a TIU document.


Function | Return Value | Availability
--- | --- | --- | ---
CANDO^TIUSRVA | SINGLE VALUE<br><br>Boolean Truth value, with explanatory message in second '^'-piece ifFALSE.  That is: When privilege to perform action on document is granted, TIUY=1 When privilege to perform action on document is denied, TIUY=0^Why not | SUBSCRIPTION


## TIU CAN CHANGE COSIGNER?

BOOLEAN RPC to evaluate user's privilege to modify the expected cosigner, given the current status of the document, and the user's role with respect to it.


Function | Return Value | Availability
--- | --- | --- | ---
CANCHCOS^TIUSRVA | SINGLE VALUE<br><br> Boolean Truth value, with explanatory message in second '^'-piece if FALSE.  That is:   When privilege to change the Expected Cosigner is granted, TIUY=1 When privilege to change the Expected Cosigner is denied, TIUY=0^Why not | SUBSCRIPTION


## TIU CREATE ADDENDUM RECORD

This Remote Procedure allows the creation of addenda to TIU Documents.


Function | Return Value | Availability
--- | --- | --- | ---
MAKEADD^TIUSRVP | SINGLE VALUE<br><br>This is the record number of the resulting addendum. NOTE:  If no addendum record may be created, then the return variable willlook as follows:  "-1^Could not create addendum." | SUBSCRIPTION


## TIU CREATE RECORD

This remote procedure allows the creation of TIU DOCUMENT records.


Function | Return Value | Availability
--- | --- | --- | ---
MAKE^TIUSRVP | SINGLE VALUE<br><br>If the call is successful, this will be the record number (IEN) of theresulting entry in the TIU DOCUMENT FILE (#8925).  In the event of afiling error, the first "^"-piece will be zero, and the second "^"-pieceof this scalar return variable will be a textual message describing thenature of the error (e.g., 0^Invalid TITLE Selected."). | SUBSCRIPTION


## TIU DELETE RECORD

Deletes TIU Document records...Evaluates authorization.


Function | Return Value | Availability
--- | --- | --- | ---
DELETE^TIUSRVP | SINGLE VALUE<br><br>Returns error message with ERR=1^Explanation text if the user is NOTauthorized to delete the named record (e.g., it's his, but signed; or it'snot his, and he better keep his paws off it). | SUBSCRIPTION


## TIU DETAILED DISPLAY

Gets details for display of a given record.


Function | Return Value | Availability
--- | --- | --- | ---
RPC^TIUSRV | GLOBAL ARRAY<br><br>Returns all known details of the record identified by TIUDA (Source,Signature, Linked Problems, Body of document, etc.). | SUBSCRIPTION


## TIU DIV AND CLASS INFO

Returns a list of Divisions and User Classes for a specific User.


Function | Return Value | Availability
--- | --- | --- | ---
USERINFO^TIUSRVT1 | ARRAY<br><br>Array in the following format:D^Division IENC^User Class IENFirst Division should be DUZ(2). | RESTRICTED


## TIU DOCUMENTS BY CONTEXT

Returns lists of TIU Documents that satisfy the following search criteria: 1 - signed documents (all)   2 - unsigned documents  3 - uncosigned documents4 - signed documents/author5 - signed documents/date range


Function | Return Value | Availability
--- | --- | --- | ---
CONTEXT^TIUSRVLO | GLOBAL ARRAY<br><br>The return array has elements with the following positional values: IEN^TITLE^REFERENCE DATE/TIME (INT)^PATIENT NAME (LAST I/LAST 4)^AUTHOR   (INT;EXT)^HOSPITAL LOCATION^SIGNATURE STATUS^Visit Date/Time^   Discharge Date/time^Variable Pointer to Request (e.g., Consult)^# of   Associated Images^Subject^Has Children^IEN of Parent Document | SUBSCRIPTION


## TIU FIELD CAN EDIT

Returns TRUE if the current user is allowed to edit template fields.


Function | Return Value | Availability
--- | --- | --- | ---
CANEDIT^TIUSRVF1 | SINGLE VALUE | RESTRICTED


## TIU FIELD CHECK

Very similar to IMPORT^TIUSRVF, except does not save template fields.Resolves self referencing loops, and takes into account fields withthe same name already saved.


Function | Return Value | Availability
--- | --- | --- | ---
CHKFLD^TIUSRVF1 | ARRAY<br><br>Returns an array of named results and modified XML, separated by a linewith "***".  The named results is in the format NAME^CODE^NEW_NAME, whereNAME is the original name in the field, CODE indicates 0 or 1, where1 means the field does not need to be renamed, and 0 indicates an erroror that the field should be renamed (to the name in the NEW_NAME field.)The NEW_NAME contains the error text XML ERROR if the XML has formattingproblems. | RESTRICTED


## TIU FIELD DELETE

Deletes an entry in the Template Field (8927.1) file.


Function | Return Value | Availability
--- | --- | --- | ---
DELETE^TIUSRVF1 | SINGLE VALUE | RESTRICTED


## TIU FIELD DOLMTEXT

Reads through an array of text and converts all entries of templatefields to their assocaited List Manager text values.


Function | Return Value | Availability
--- | --- | --- | ---
DOLMTEXT^TIUSRVF1 | ARRAY<br><br>Same input array with template fields removed. | RESTRICTED


## TIU FIELD EXPORT

Exports Template Fields in XML format


Function | Return Value | Availability
--- | --- | --- | ---
EXPORT^TIUSRVF | ARRAY<br><br>XML version of template fields. | RESTRICTED


## TIU FIELD IMPORT

Imports Template Fields from XML format


Function | Return Value | Availability
--- | --- | --- | ---
IMPORT^TIUSRVF | ARRAY<br><br>Returns a list of the template fields imported, and the success of eachimport.  Some template fields may be renamed in the process. | RESTRICTED


## TIU FIELD LIST

Returns long list array of template fields


Function | Return Value | Availability
--- | --- | --- | ---
LIST^TIUSRVF1 | ARRAY | RESTRICTED


## TIU FIELD LIST ADD

Takes in the XML string, in the format XMLSET(1)=" <TEMPLATE_FIELDS>" and merges them with the global ^TMP("TIUFLDXML",$J).  If the subscript is 1,then it KILLs the global before it merges.  This routine is used so verylarge lists of fields can be processed without many calls to the database.


Function | Return Value | Availability
--- | --- | --- | ---
XFLDLD^TIUSRVF1 | ARRAY<br><br>Returns a "1" if successful; 0 otherwise. | RESTRICTED


## TIU FIELD LIST IMPORT

Calls the import process for a pre-loaded (into ^TMP) list of templatefields.


Function | Return Value | Availability
--- | --- | --- | ---
LIMPORT^TIUSRVF1 | ARRAY<br><br>Returns a list of field names imported in the format NAME^RCODE^RENAME, where NAME is the desired field name, RCODE is 1 or 0 if the fieldwas added/same or renamed (respectively), and RENAME is the actualsaved name of the field if RCODE is 0. | -


## TIU FIELD LOAD

Returns a single Template Field object


Function | Return Value | Availability
--- | --- | --- | ---
LOAD^TIUSRVF | ARRAY<br><br>Array in the format:1: Node 0 of TIU Template Field File (#8927.1)2: D^Description Records3: I^Item Records | RESTRICTED


## TIU FIELD LOAD BY IEN

Returns a single Template Field object.


Function | Return Value | Availability
--- | --- | --- | ---
LOADIEN^TIUSRVF | ARRAY<br><br>Array in the format:1: Node 0 of TIU Template Field File (#8927.1)2: D^Description Records3: I^Item Records | RESTRICTED


## TIU FIELD LOCK

Locks a template field record for editing


Function | Return Value | Availability
--- | --- | --- | ---
LOCK^TIUSRVF1 | SINGLE VALUE<br><br>Flag returns success of lock. | RESTRICTED


## TIU FIELD NAME IS UNIQUE

Returns TRUE if the template field name is unique


Function | Return Value | Availability
--- | --- | --- | ---
ISUNIQUE^TIUSRVF1 | SINGLE VALUE | RESTRICTED


## TIU FIELD SAVE

Saves a single Template Field


Function | Return Value | Availability
--- | --- | --- | ---
SAVE^TIUSRVF | SINGLE VALUE<br><br>Returns success or failuer of save operation. | RESTRICTED


## TIU FIELD UNLOCK

Unlock Template Field


Function | Return Value | Availability
--- | --- | --- | ---
UNLOCK^TIUSRVF1 | SINGLE VALUE | RESTRICTED


## TIU GET ADDITIONAL SIGNERS

Returns the list of additional signers currently identified for a givenTIU document.


Function | Return Value | Availability
--- | --- | --- | ---
GETSIGNR^TIULX | ARRAY<br><br>This is an array of persons whose signature is expected on the document.e.g.,        TIUY(1)=213^CASEY,BEN       TIUY(2)=73425^HOWSER,DOOGEY       TIUY(3)=172^WELBY,MARCUS Note that the array elements are returned as DUZ^Username. | SUBSCRIPTION


## TIU GET ALERT INFO

Given a TIU XQAID, return the patient and document type for the item beingalerted.


Function | Return Value | Availability
--- | --- | --- | ---
GETALRT^TIUSRVR | SINGLE VALUE<br><br>TIUDA^DFN^gui tab indicator where TIUDA is the document IEN in ^TIU(8925DFN is the patient IENgui tab indicator is an arbitrarily set constant based on the document   type. | -


## TIU GET ASSOCIATED IMAGES

Given a Document, get the list of associated images.


Function | Return Value | Availability
--- | --- | --- | ---
GETILST^TIUSRVPL | ARRAY<br><br>This is the list of Images associated with the Document identified by TIUDA.For example:TIUY(1)=21734TIUY(2)=21799TIUY(3)=21803Where the rvalue of each list element is the record number (IEN) of eachimage in the IMAGE FILE (#2005). | SUBSCRIPTION


## TIU GET BOILERPLATE

Returns a titles boilerplate.


Function | Return Value | Availability
--- | --- | --- | ---
TITLEBP^TIUSRVT1 | ARRAY<br><br>Title's Boilerplate. | RESTRICTED


## TIU GET DEFAULT PROVIDER

This RPC returns the default provider as specified by the TIU Site ParameterDEFAULT PRIMARY PROVIDER, which has the following allowable values:0      NONE, DON'T PROMTIn which case the call will return 0^1      DEFAULT, BY LOCATIONIn this case, the call will return the default provider for a given HospitalLocation, as specified in the set-up for the Clinic in MAS. If a defaultprovider is specified for the location in question, that person will bereturned. If the Clinic set-up specifies use of the Primary Provider (if defined) for the patient, then that person will be returned. The returnformat will be DUZ^LASTNAME,FIRSTNAME.2      AUTHOR (IF PROVIDER)In this case, the call will return the current user (if they are a known Provider). If their not a known Provider, then the call will return 0^.


Function | Return Value | Availability
--- | --- | --- | ---
DEFDOC^TIUSRVP1 | SINGLE VALUE<br><br>This RPC returns the default provider as specified by the TIU Site ParameterDEFAULT PRIMARY PROVIDER, which has the following allowable values:0       NONE, DON'T PROMTIn which case the call will return 0^1       DEFAULT, BY LOCATIONIn this case, the call will return the default provider for a given HospitalLocation, as specified in the set-up for the Clinic in MAS. If a defaultprovider is specified for the location in question, that person will bereturned. If the Clinic set-up specifies use of the Primary Provider (if defined) for the patient, then that person will be returned. The returnformat will be DUZ^LASTNAME,FIRSTNAME.2       AUTHOR (IF PROVIDER)In this case, the call will return the current user (if they are a known Provider). If their not a known Provider, then the call will return 0^. | SUBSCRIPTION


## TIU GET DOC COUNT BY VISIT

This remote procedure returns the number of documents that are linked to a particular visit.


Function | Return Value | Availability
--- | --- | --- | ---
DOCCNT^TIUSRVLV | SINGLE VALUE<br><br>This is the COUNT of TIU DOCUMENTS which are currently associated with the VISIT passed in the VSIT input parameter. | SUBSCRIPTION


## TIU GET DOCUMENT PARAMETERS

This Remote Procedure returns the parameters by which a given documentor document type is to be processed.


Function | Return Value | Availability
--- | --- | --- | ---
DOCPARM^TIUSRVP1 | ARRAY<br><br>This call returns an array with just one element (so far).  The stringwill have the following '^'-delimited pieces: TIUY(0)= (#.01) DOCUMENT DEFINITION [1P] ^ (#.02) REQUIRE RELEASE         ==>[2S] ^ (#.03) REQUIRE MAS VERIFICATION [3S] ^ (#.04)         ==>REQUIRE AUTHOR TO SIGN [4S] ^ (#.05) WHEN MAY CHART COPY         ==>BE PRINTED [5P] ^ (#.06) ROUTINE PRINT EVENT(S) [6S] ^         ==>(#.07) STAT PRINT EVENT(S) [7S] ^ (#.08) MANUAL PRINT         ==>AFTER ENTRY [8S] ^ (#.09) ALLOW CHART PRINT OUTSIDE MAS         ==>[9S] ^ (#.1) ALLOW >1 RECORDS PER VISIT [10S] ^ (#.11)         ==>ENABLE IRT INTERFACE [11S] ^ (#.12) IRT DEFICIENCY [12P]         ==>^ (#.13) DEFAULT PRINTER [13P] ^ | SUBSCRIPTION


## TIU GET DOCUMENT STATUS

This RPC is used to retrieve the Status (8925.6 IEN) of a TIU DOCUMENT.


Function | Return Value | Availability
--- | --- | --- | ---
GETSTAT^TIUPRF2 | SINGLE VALUE<br><br>TIU DOCUMENT STATUS IEN (8925.6) | -


## TIU GET DOCUMENT TITLE

This remote procedure returns the pointer to the TIU DOCUMENT DEFINITIONFILE that corresponds to the TITLE of the document identified in the TIUDAparameter.


Function | Return Value | Availability
--- | --- | --- | ---
GETTITLE^TIUSRVA | SINGLE VALUE<br><br>This is the internal entry number (IEN) of the document's TITLE in the TIUDOCUMENT DEFINITION FILE (#8925.1). | SUBSCRIPTION


## TIU GET DOCUMENTS FOR IMAGE

Given an image, get the list of associated documents.


Function | Return Value | Availability
--- | --- | --- | ---
GETDLST^TIUSRVPL | ARRAY<br><br>This is the list of Documents associated with the Image identified by IMGDA.For example:TIUY(1)=721734TIUY(2)=721799TIUY(3)=721803Where the rvalue of each list element is the record number (IEN) of image inthe TIU DOCUMENT FILE (#8925). | SUBSCRIPTION


## TIU GET DOCUMENTS FOR REQUEST

This Remote Procedure returns the list of documents associated with agiven Request (e.g., Consult Request, or Surgical Case).


Function | Return Value | Availability
--- | --- | --- | ---
GETDOCS^TIUSRVLR | GLOBAL ARRAY<br><br>The return array has elements with the following positional values:   IEN^TITLE^REFERENCE DATE/TIME (INT)^PATIENT NAME (LAST I/LAST 4)^AUTHOR    (INT;EXT)^HOSPITAL LOCATION^SIGNATURE STATUS^Visit Date/Time^    Discharge Date/time^Variable Pointer to Request (e.g., Consult)^# of    Associated Images^Subject^Has Children^IEN of Parent Document | SUBSCRIPTION


## TIU GET DS TITLES


Function | Return Value | Availability
--- | --- | --- | ---
SUMMARY^TIUSRVD | ARRAY | -


## TIU GET DS URGENCIES

Returns a set of discharge summary urgencies for use in a long list box.


Function | Return Value | Availability
--- | --- | --- | ---
URGENCY^TIUSRVA | ARRAY<br><br>The array of urgencies are returned in the following format:   Y(1) = <internal value> ^ <external value>Example:   Y(1) = P^priority   Y(2) = R^routine | SUBSCRIPTION


## TIU GET LINKED PRF NOTES

Returns list of SIGNED, LINKED PRF notes for given patient, for givenPRF Title


Function | Return Value | Availability
--- | --- | --- | ---
GETNOTES^TIUPRF2 | ARRAY<br><br>   TIUY = # of notes   TIUY(InternalNoteDate) = NoteIEN^Action^ExternalNoteDate^Authorwhere Internal Note Date is REFERENCE DATE in file 8925, (or9999999-REFERENCE DATE if REVORDER=1). | -


## TIU GET LIST OF OBJECTS

This RPC returns the list of TIU OBJECTS that the current user may selectfrom.


Function | Return Value | Availability
--- | --- | --- | ---
OBJLST^TIUSRVT | GLOBAL ARRAY<br><br>The global array ^TMP("TIU OBJECTS",$J,1...n)=IEN^NAME is returned. | SUBSCRIPTION


## TIU GET PERSONAL PREFERENCES

Returns Users personal preferences for TIU in the following format: TIUY = USER [1P] ^ DEFAULT LOCATION [2P] ^ REVIEW SCREEN SORT FIELD [3S] ^    ==>REVIEW SCREEN SORT ORDER [4S] ^ DISPLAY MENUS [5S] ^ PATIENT    ==>SELECTION PREFERENCE [6S] ^ ASK 'Save changes?' AFTER EDIT [7S] ^    ==>ASK SUBJECT FOR PROGRESS NOTES [8S] ^


Function | Return Value | Availability
--- | --- | --- | ---
GETPREF^TIUSRVR | SINGLE VALUE<br><br>TIUY = USER [1P] ^ DEFAULT LOCATION [2P] ^ REVIEW SCREEN SORT FIELD [3S] ^    ==>REVIEW SCREEN SORT ORDER [4S] ^ DISPLAY MENUS [5S] ^ PATIENT    ==>SELECTION PREFERENCE [6S] ^ ASK 'Save changes?' AFTER EDIT [7S] ^    ==>ASK SUBJECT FOR PROGRESS NOTES [8S] ^ | SUBSCRIPTION


## TIU GET PN TITLES

This API returns a list of Progress Notes Titles, including a SHORT LISTof preferred titles as defined by the user, and a LONG LIST of all titlesdefined at the site.


Function | Return Value | Availability
--- | --- | --- | ---
NOTES^TIUSRVD | ARRAY | SUBSCRIPTION


## TIU GET PRF ACTIONS

This RPC gets the Patient Record Flag History Assignments/Actions for a Patient/Title Combination.


Function | Return Value | Availability
--- | --- | --- | ---
GETACTS^TIUPRF2 | ARRAY<br><br>Returns data in the following format for each Flag Assignment/Action FLAG NAME^FLAG IEN^ACTION NAME^ACTION IEN^ACTION DATE I^ACTION DATE E^TIU IEN | -


## TIU GET PRF TITLE

Returns IEN of the TIU Note Title in file 8925.1 which is associatedwith given flag for given patient.


Function | Return Value | Availability
--- | --- | --- | ---
GETTITLE^TIUPRF2 | SINGLE VALUE<br><br>Returns TIUY = TitleIEN^Title,where Title is the .01 field in file 8925.1 | -


## TIU GET PRINT NAME

This Remote Procedure receives a pointer to the TIU DOCUMENT DEFINITIONFILE (#8925.1) and returns a string containing the Print Name of thecorresponding Document Definition.


Function | Return Value | Availability
--- | --- | --- | ---
GETPNAME^TIUSRVP1 | SINGLE VALUE<br><br>This is a string containing the Print Name of the Document Definitionreferenced by TIUTYPE. | SUBSCRIPTION


## TIU GET RECORD TEXT

This RPC will get the textual portion of a TIU Document Record.


Function | Return Value | Availability
--- | --- | --- | ---
TGET^TIUSRVR1 | GLOBAL ARRAY | SUBSCRIPTION


## TIU GET REQUEST

This Remote Procedure returns the variable pointer to the REQUESTINGPACKAGE REFERENCE (File #8925, Field #1405). This would be the record inthe Requesting Package (e.g., Consult/Request Tracking or Surgery) forwhich the resulting document has been entered in TIU.


Function | Return Value | Availability
--- | --- | --- | ---
GET1405^TIUSRVR | SINGLE VALUE<br><br>This is the Variable pointer (e.g., "15741;GMR(123,") to the correspondingrequest. | SUBSCRIPTION


## TIU GET SITE PARAMETERS

This RPC returns the TIU Parameters for the Division the user is logged in to.


Function | Return Value | Availability
--- | --- | --- | ---
SITEPARM^TIUSRVP1 | SINGLE VALUE<br><br>The call returns a '^'-delimited string, with the following pieces:Y = INSTITUTION [1P] ^ ENABLE ELECTRONIC SIGNATURE [2S] ^ CHARACTERS PER LINE==> [3N] ^ GRACE PERIOD FOR PURGE [4N] ^ GRACE PERIOD FOR SIGNATURE [5N] ^==> OPTIMIZE LIST BUILDING FOR [6S] ^ SUPPRESS REVIEW NOTES PROMPT [7S] ^==> DEFAULT PRIMARY PROVIDER [8S] ^ ASCII UPLOAD SOURCE [9S] ^ RECORD==> HEADER SIGNAL [10F] ^ END OF MESSAGE SIGNAL [11F] ^ BEGIN REPORT TEXT==> SIGNAL [12F] ^ MAJOR DELIMITER [13F] ^The pieces correspond to fields .01 through .13 in the TIU PARAMETERS FILE (#8925.99). | SUBSCRIPTION


## TIU HAS AUTHOR SIGNED?

Boolean RPC returns a value of 0 if the author has not signed and the user attempting to sign is the expected co-signer.  Returns a 1 if the author has signed or the user attempting to sign is NOT the expected co-signer.


Function | Return Value | Availability
--- | --- | --- | ---
AUTHSIGN^TIUSRVA | SINGLE VALUE<br><br>Boolean Value:0 if author has NOT signed AND user is EC1 if author HAS signed OR user is NOT EC 1 if author HAS signed OR user is NOT EC | SUBSCRIPTION


## TIU ID ATTACH ENTRY

This RPC will attach a a document as an Interdisciplinary (ID) entry to anID Parent document.


Function | Return Value | Availability
--- | --- | --- | ---
IDATTCH^TIUSRVP1 | SINGLE VALUE<br><br>This is a flag indicating the success or failure of the call: IF THE CALL SUCCEEDS, THE ENTRY NUMBER OF THE ENTRY WILL BE RETURNED. IF THE CALL FAILS, 0^Explanatory Message WILL BE RETURNED. | SUBSCRIPTION


## TIU ID CAN ATTACH

This BOOLEAN RPC evaluates the question of whether a particular documentmay be attached as an entry to an Interdisciplinary Note (i.e., can thisdocument be an ID Child?).


Function | Return Value | Availability
--- | --- | --- | ---
CANATTCH^TIUSRVA | SINGLE VALUE<br><br>This is the BOOLEAN result:         1                      = Document may be attached        0^Explanatory message  = Document may NOT be attached        -1^Explanatory message = Document may NOT be attached, because                                 a business rule allows it to also be a                                 parent document. | SUBSCRIPTION


## TIU ID CAN RECEIVE

This BOOLEAN RPC evaluates the question of whether a particular documentmay receive an entry as an Interdisciplinary Parent Note (i.e., can thisdocument be an ID Parent?).


Function | Return Value | Availability
--- | --- | --- | ---
CANRCV^TIUSRVA | SINGLE VALUE<br><br>This is the BOOLEAN result:         1                     = Document may receive an ID Entry        0^Explanatory message = Document may NOT receive an ID Entry | SUBSCRIPTION


## TIU ID DETACH ENTRY

This call will remove an ID Entry from an Interdisciplinary Note.


Function | Return Value | Availability
--- | --- | --- | ---
IDDTCH^TIUSRVP1 | SINGLE VALUE<br><br>This is a flag indicating the success or failure of the call: IF THE CALL SUCCEEDS, THE ENTRY NUMBER OF THE ENTRY WILL BE RETURNED. IF THE CALL FAILS, 0^Explanatory Message WILL BE RETURNED. | SUBSCRIPTION


## TIU IDENTIFY CLINPROC CLASS

This RPC gets the CLINICAL PROCEDURES TIU Document Definitionfile (#8925.1) IEN.


Function | Return Value | Availability
--- | --- | --- | ---
CPCLASS^TIUCP | SINGLE VALUE<br><br>A numeric value is returned. Either the CLINICAL PROCEDURES TIU Document file (#8925.1) IEN or 0. | SUBSCRIPTION


## TIU IDENTIFY CONSULTS CLASS

This RPC returns the record number of the class CONSULTS in the TIUDOCUMENT DEFINITION file (#8925.1).


Function | Return Value | Availability
--- | --- | --- | ---
CNSLCLAS^TIUSRVD | SINGLE VALUE<br><br>The value returned will be either a positive integer, corresponding to therecord number identifying the CONSULTS class, or zero, indicating thatCONSULTS are not yet implemented in TIU. | SUBSCRIPTION


## TIU IDENTIFY SURGERY CLASS

This RPC returns the record number of the class identified by the CLNAMEparameter in the TIU DOCUMENT DEFINITION file (#8925.1).


Function | Return Value | Availability
--- | --- | --- | ---
SURGCLAS^TIUSRVD | SINGLE VALUE<br><br>The value returned will be either a positive integer, corresponding to therecord number identifying the class identified by the CLNAME parameter, orzero, indicating that the Surgery interface is not yet implemented inTIU. | SUBSCRIPTION


## TIU IS THIS A CLINPROC?

This RPC evaluates whether or not a Title is under theCLINICAL PROCEDURES Class.


Function | Return Value | Availability
--- | --- | --- | ---
ISCP^TIUCP | SINGLE VALUE<br><br>A boolean value is returned. 1 = True.  The Title is under CLINICAL PROCEDURES Class.0 = False.  The Title is NOT under the CLINICAL PROCEDURES Class. | SUBSCRIPTION


## TIU IS THIS A CONSULT?

BOOLEAN RPC which evaluates whether the title indicated is that of aconsult.


Function | Return Value | Availability
--- | --- | --- | ---
ISCNSLT^TIUCNSLT | SINGLE VALUE<br><br>Scalar value indicating the truth value of the result (i.e., 0 indicatesFALSE - the title is NOT that of a CONSULT; 1 indicates TRUE - the titleIS that of a consult). | SUBSCRIPTION


## TIU IS THIS A SURGERY?

BOOLEAN RPC which evaluates whether the title indicated is that of aSURGICAL REPORT or PROCEDURE REPORT (NON-O.R.).


Function | Return Value | Availability
--- | --- | --- | ---
ISSURG^TIUSROI | SINGLE VALUE<br><br>Scalar value indicating the truth value of the result (i.e., 0 indicatesFALSE - the title is NOT that of a SURGICAL REPORT or PROCEDURE REPORT(NON-O.R.); 1 indicates TRUE - the title IS that of a SURGICAL REPORT orPROCEDURE REPORT (NON-O.R.). | SUBSCRIPTION


## TIU IS USER A PROVIDER?

This Boolean RPC returns TRUE if the user was a known provider on the date specified.


Function | Return Value | Availability
--- | --- | --- | ---
ISAPROV^TIUSRVP1 | SINGLE VALUE<br><br>0=FALSE1=TRUE | SUBSCRIPTION


## TIU IS USER A USR PROVIDER

This Boolean RPC returns TRUE if the user was a member of USR CLASS PROVIDER on the date specified.


Function | Return Value | Availability
--- | --- | --- | ---
USRPROV^TIUSRVP1 | SINGLE VALUE<br><br>TRUE is returned if user is an active member of USR CLASS PROVIDER on the given date. If not, FALSE is returned. | -


## TIU ISPRF

This RPC is to check to see if the passed in TIU DOCUMENT TITLE IEN is a Patient Record Flag TITLE.


Function | Return Value | Availability
--- | --- | --- | ---
ISPRFTTL^TIUPRF2 | SINGLE VALUE<br><br>1 if TIUTTL is a PRF Title0 if TIUTTL is not a PRF Title | AGREEMENT


## TIU JUSTIFY DELETE?

BOOLEAN RPC that evaluates wheter a justification is required for deletion (e.g., deletion is authorized, but the document has been signed, etc.).


Function | Return Value | Availability
--- | --- | --- | ---
NEEDJUST^TIUSRVA | SINGLE VALUE<br><br>Single valued, BOOLEAN return variable, where 1 indicates that the callingapplication should ask for a justification, and 0 indicates that no justification is needed. | SUBSCRIPTION


## TIU LINK DOCUMENT TO IMAGE

This RPC links a document with an image. It will support a many-to-manyassociation between documents and images.


Function | Return Value | Availability
--- | --- | --- | ---
PUTIMAGE^TIUSRVPL | SINGLE VALUE<br><br>The return variable is a scalar result. If a link is successfully created, it will be the record number of the link in the TIU EXTERNAL LINKAGE FILE (#8925.91). If a link cannot be made (e.g., the document and image are already linked), the return variable will be a two '^'-piece result, withzero in the first '^'-piece, and an explanatory message in the second (e.g.,0^ Document already linked to this image). | SUBSCRIPTION


## TIU LINK TO FLAG

This RPC is used to link a Progress Note to a Patient Record Flag


Function | Return Value | Availability
--- | --- | --- | ---
LINK^TIUPRF2 | SINGLE VALUE | -


## TIU LOAD BOILERPLATE TEXT

This RPC will load the boilerplate text associated with the selectedtitle, and execute the methods for any objects embedded in the boilerplatetext.


Function | Return Value | Availability
--- | --- | --- | ---
BLRSHELL^TIUSRVD | GLOBAL ARRAY | SUBSCRIPTION


## TIU LOAD RECORD FOR EDIT

This RPC loads the return array with data in a format consistent with thatrequired by the TIU UPDATE RECORD API.  It should be invoked when the userinvokes the Edit action, to load the dialog for editing the document.


Function | Return Value | Availability
--- | --- | --- | ---
GET4EDIT^TIUSRVR | GLOBAL ARRAY<br><br>The return array will be subscripted by the field #, with the body of thedocument in the ^TMP("TIUEDIT",$J,"TEXT",n) subscript. | SUBSCRIPTION


## TIU LOCK RECORD

This RPC will issue an incremental LOCK on the record identified by theTIUDA parameter, returning an integer truth value indicating successor failure in obtaining the LOCK.


Function | Return Value | Availability
--- | --- | --- | ---
LOCK^TIUSRVP | SINGLE VALUE<br><br>ERR flag indicating whether or not an incremental LOCK was obtained:            0 if the LOCK was GRANTED           1^<Explanatory Message> if LOCK was DENIED | SUBSCRIPTION


## TIU LONG LIST BOILERPLATED

Used by the GUI to supply a long list of boilerplated titles.


Function | Return Value | Availability
--- | --- | --- | ---
LONGLIST^TIUSRVT1 | ARRAY<br><br>This is an array of the 44 nearest titles to that indicate by the user inthe direction passed by the longlist component. | RESTRICTED


## TIU LONG LIST CLINPROC TITLES

This RPC serves data to a longlist of selectable Titles for CLINICALPROCEDURES.


Function | Return Value | Availability
--- | --- | --- | ---
LNGCP^TIUCP | ARRAY<br><br>An array is returned. This is an array of the 44 nearest titles to that indicated by the user inthe direction passed by the longlist component. | SUBSCRIPTION


## TIU LONG LIST CONSULT TITLES

This RPC serves data to a longlist of selectable TITLES for CONSULTS.


Function | Return Value | Availability
--- | --- | --- | ---
LNGCNSLT^TIUSRVD | ARRAY<br><br>This is an array of the 44 nearest titles to that indicate by the user inthe direction passed by the longlist component. | SUBSCRIPTION


## TIU LONG LIST OF TITLES

This RPC serves data to a longlist of selectable TITLES by CLASS.  e.g.,passing the class PROGRESS NOTES will return active Progress Notes titleswhich the current user is authorized to enter notes under.


Function | Return Value | Availability
--- | --- | --- | ---
LONGLIST^TIUSRVD | ARRAY<br><br>This is an array of the 44 nearest titles to that indicate by the user inthe direction passed by the longlist component. | SUBSCRIPTION


## TIU LONG LIST SURGERY TITLES

This RPC serves data to a longlist of selectable TITLES for the classnamed in the CLNAME parameter.


Function | Return Value | Availability
--- | --- | --- | ---
LNGSURG^TIUSRVD | ARRAY<br><br>This is an array of the 44 nearest titles to that indicated by the user inthe direction passed by the longlist component. | SUBSCRIPTION


## TIU MED GET HEALTH SUMMARY

Returns the HEALTH SUMMARY information.


Function | Return Value | Availability
--- | --- | --- | ---
GETHS^TIUMED1 | ARRAY | RESTRICTED


## TIU MED GET LIST DATA

Returns a list of patients from a personal list.


Function | Return Value | Availability
--- | --- | --- | ---
PLISTMEM^TIUMED1 | ARRAY | RESTRICTED


## TIU MED GET OBJECT

Returns the data from a TIU Object.


Function | Return Value | Availability
--- | --- | --- | ---
GETOBJ^TIUMED1 | GLOBAL ARRAY<br><br>The return array returns the value of the TIU Object in either a single ormulti-line format. | RESTRICTED


## TIU MED GET PATIENT DATA

Returns patient data.


Function | Return Value | Availability
--- | --- | --- | ---
GETPATDT^TIUMED1 | ARRAY<br><br>The return array has elements with the following positional values: PATIENT DFN^PATIENT NAME^PATIENT SEX^PATIENT SSN^PATIENT DOB^SECURITY Health Summary Data Follows if desired. | RESTRICTED


## TIU MED GET PATIENT LISTS

Returns a list of personal patient lists for the current user.


Function | Return Value | Availability
--- | --- | --- | ---
PLISTS^TIUMED1 | ARRAY<br><br>Returns a list of personal patient lists for the current user. | RESTRICTED


## TIU MED LAST5

Returns a list of patients that match an A9999 identifier.


Function | Return Value | Availability
--- | --- | --- | ---
LAST5^TIUMED1 | ARRAY | RESTRICTED


## TIU MED LIST ALL

Returns a list of patients for selection.


Function | Return Value | Availability
--- | --- | --- | ---
LISTALL^TIUMED1 | ARRAY | RESTRICTED


## TIU MED PATIENT MANAGEMENT

Returns the user's level of patient importing via manual entry.


Function | Return Value | Availability
--- | --- | --- | ---
PATMAN^TIUMED1 | SINGLE VALUE<br><br>Evaluates USER DUZ and returns: 0 = None1 = Exact Match Only2 = SSN Only | RESTRICTED


## TIU NOTES

This API gets lists of progress notes for a patient, with optional parameters for STATUS, EARLY DATE/TIME, and LATE DATE/TIME.


Function | Return Value | Availability
--- | --- | --- | ---
NOTES^TIUSRVLO | GLOBAL ARRAY | SUBSCRIPTION


## TIU NOTES 16 BIT

This API gets lists of progress notes for a patient, with optional parameters for STATUS, EARLY DATE/TIME, and LATE DATE/TIME.


Function | Return Value | Availability
--- | --- | --- | ---
NOTES^TIUSRVLC | GLOBAL ARRAY | SUBSCRIPTION


## TIU NOTES BY VISIT

This API gets lists of Progress Notes by visit from TIU.


Function | Return Value | Availability
--- | --- | --- | ---
NOTES^TIUSRVLV | GLOBAL ARRAY<br><br>This is the pointer to the visit file. | SUBSCRIPTION


## TIU ONE VISIT NOTE?

Boolean RPC to evaulate if note has a corresponding visit.


Function | Return Value | Availability
--- | --- | --- | ---
TIUVISIT^TIUSRVA | SINGLE VALUE<br><br>Boolean value; 1 if limited to one visit, 0 if any. | RESTRICTED


## TIU PERSONAL TITLE LIST

This Remote Procedure returns the user's list of preferred titles for agiven class of documents, along with the default title, if specified.


Function | Return Value | Availability
--- | --- | --- | ---
PERSLIST^TIUSRVD | ARRAY | SUBSCRIPTION


## TIU PRINT RECORD

Allows Printing of TIU Documents on demand.


Function | Return Value | Availability
--- | --- | --- | ---
RPC^TIUPD | SINGLE VALUE<br><br>This is an error flag/message which will have two '^'-pieces.  The firstpiece will be a boolean flag indicating whether or not the call failed (0indicates success, while 1 indicates failure).  The second piece is atextual message indicating the nature of the error.  In the event ofsuccess, the second piece will describe whether the printout will be for aCHART COPY or a WORK COPY. | SUBSCRIPTION


## TIU REM DLG OK AS TEMPLATE

Returns TRUE is the passed in reminder dialog is allowed to be used ina TIU Template.


Function | Return Value | Availability
--- | --- | --- | ---
REMDLGOK^TIUSRVT2 | SINGLE VALUE | RESTRICTED


## TIU REMINDER DIALOGS

Returns a list of reminder dialogs allowed for use as Templates.


Function | Return Value | Availability
--- | --- | --- | ---
REMDLGS^TIUSRVT2 | ARRAY<br><br>Array of allowed reminder dialogs in IEN^Dialog Name format. | RESTRICTED


## TIU REMOVE LINK TO IMAGE

This RPC will remove a link between a document and an image. Only valid links may be removed.


Function | Return Value | Availability
--- | --- | --- | ---
DELIMAGE^TIUSRVPL | SINGLE VALUE<br><br>This is a BOOLEAN result. If the call is made with record numbers for which a valid link exists, it will remove the link, and the return value will be 1 (TRUE), otherwise, the return value will have two '^'-pieces (i.e., zero and an explanatory message (e.g., 0^ Document and Image not currently linked)). | SUBSCRIPTION


## TIU REQUIRES COSIGNATURE

This Boolean RPC simply evaluates whether the current user requirescosignature for TIU DOCUMENTS, and returns a 1 if true, or a 0 if false.


Function | Return Value | Availability
--- | --- | --- | ---
REQCOS^TIUSRVA | SINGLE VALUE<br><br>Boolean result: 0 if FALSE, OR 1 if TRUE. | SUBSCRIPTION


## TIU SET ADMINISTRATIVE CLOSURE

This remote procedure sets the file attributes necessary to close adocument by administrative action (either manually or by scanning a paperdocument that doesn't require the signature of an author as a typical TIUDocument would).


Function | Return Value | Availability
--- | --- | --- | ---
ADMNCLOS^TIUSRVPT | SINGLE VALUE<br><br>If successful, this RPC returns the IEN in the TIU DOCUMENT file (#8925)of the document that was closed. Otherwise, it will return:  0^<Explanatory message> | SUBSCRIPTION


## TIU SET DOCUMENT TEXT

This RPC buffers the transmittal of text (i.e., the body of TIU Documents)from the Client to the Server. It allows documents of indefinite size tobe filed, without risk of an allocate error on the M Server.


Function | Return Value | Availability
--- | --- | --- | ---
SETTEXT^TIUSRVPT | SINGLE VALUE<br><br>Four '^'-piece scalar result formatted as follows: If successful:   <IEN in TIU DOCUMENT FILE>^<LAST_PAGE_RECEIVED>^<TOTAL_PAGES_EXPECTED> If unsuccessful:   0^0^0^Explanatory text | SUBSCRIPTION


## TIU SIGN RECORD

This API Supports the application of the user's electronic signature to aTIU document while evaluating authorization, and validating the user'selectronic signature.


Function | Return Value | Availability
--- | --- | --- | ---
SIGN^TIUSRVP | SINGLE VALUE<br><br>This is the error code which may result if the user enters an invalidcode, or if the Authorization/Subscription Utility determines that theuser is NOT authorized to sign (or cosign) the document, as specified bythe site's business rules. | SUBSCRIPTION


## TIU SUMMARIES

This API gets lists of Discharge Summaries for a patient, with optional parameters for STATUS, EARLY DATE/TIME, and LATE DATE/TIME.


Function | Return Value | Availability
--- | --- | --- | ---
SUMMARY^TIUSRVLO | GLOBAL ARRAY | SUBSCRIPTION


## TIU SUMMARIES BY VISIT

This API returns lists of Discharge Summaries by visit.


Function | Return Value | Availability
--- | --- | --- | ---
SUMMARY^TIUSRVLV | GLOBAL ARRAY | SUBSCRIPTION


## TIU TEMPLATE ACCESS LEVEL


Function | Return Value | Availability
--- | --- | --- | ---
TACCESS^TIUSRVT2 | SINGLE VALUE | RESTRICTED


## TIU TEMPLATE ALL TITLES

Returns a long list of all active titles.


Function | Return Value | Availability
--- | --- | --- | ---
TITLELST^TIUSRVT1 | ARRAY | RESTRICTED


## TIU TEMPLATE CHECK BOILERPLATE

This RPC will evaluate boilerplate passed in the input array, checking tosee whether any of the embedded objects are inactive, faulty, orambiguous.


Function | Return Value | Availability
--- | --- | --- | ---
BPCHECK^TIUSRVT | ARRAY<br><br>The return array, TIUY will have the following format: If no problems are identified with the boilerplate text, the array will beundefined. If any problems are identified, the array will contain explatatory text,e.g., TIUY(1)=Object \|PFT RESULT\| is faulty: TIUY(2)=No Object Method. | SUBSCRIPTION


## TIU TEMPLATE CREATE/MODIFY

This remote procedure allows creation and update of Templates.


Function | Return Value | Availability
--- | --- | --- | ---
SETTMPLT^TIUSRVT | SINGLE VALUE<br><br>If the call is successful, this will be the record number (IEN) of theresulting entry in the TIU TEMPLATE FILE (#8927).  In the event of afiling error, the first "^"-piece will be zero, and the second "^"-pieceof this scalar return variable will be a textual message describing thenature of the error (e.g., 0^The .01 field failed the input transform"). | SUBSCRIPTION


## TIU TEMPLATE DELETE

This RPC will delete orphan entries in the Template file (i.e., onlythose entries that have been removed from any Groups, Classes, Personalor Shared Root entries).


Function | Return Value | Availability
--- | --- | --- | ---
DELETE^TIUSRVT | SINGLE VALUE<br><br>This is the number of records actually deleted by the call. | SUBSCRIPTION


## TIU TEMPLATE GET DEFAULTS

Returns Default Template Settings


Function | Return Value | Availability
--- | --- | --- | ---
GETDFLT^TIUSRVT2 | SINGLE VALUE | RESTRICTED


## TIU TEMPLATE GET DESCRIPTION

Returns a Template's Description


Function | Return Value | Availability
--- | --- | --- | ---
GETDESC^TIUSRVT1 | ARRAY | RESTRICTED


## TIU TEMPLATE GET TEMPLATE

This RPC gets basic attributes of a given TIU Template (file 8927).


Function | Return Value | Availability
--- | --- | --- | ---
GETTMPLT^TIUSRVT2 | ARRAY<br><br>Basic attributes of the given template are returned in '^'-delimited form. | AGREEMENT


## TIU TEMPLATE GETBOIL


Function | Return Value | Availability
--- | --- | --- | ---
GETBOIL^TIUSRVT | GLOBAL ARRAY | SUBSCRIPTION


## TIU TEMPLATE GETITEMS


Function | Return Value | Availability
--- | --- | --- | ---
GETITEMS^TIUSRVT | GLOBAL ARRAY | SUBSCRIPTION


## TIU TEMPLATE GETLINK

Returns template linked to a specific title or reason for request.


Function | Return Value | Availability
--- | --- | --- | ---
GETLINK^TIUSRVT1 | SINGLE VALUE | RESTRICTED


## TIU TEMPLATE GETPROOT


Function | Return Value | Availability
--- | --- | --- | ---
GETPROOT^TIUSRVT | ARRAY | SUBSCRIPTION


## TIU TEMPLATE GETROOTS


Function | Return Value | Availability
--- | --- | --- | ---
GETROOTS^TIUSRVT | ARRAY | SUBSCRIPTION


## TIU TEMPLATE GETTEXT


Function | Return Value | Availability
--- | --- | --- | ---
GETTEXT^TIUSRVT | GLOBAL ARRAY | SUBSCRIPTION


## TIU TEMPLATE ISEDITOR


Function | Return Value | Availability
--- | --- | --- | ---
ISEDITOR^TIUSRVT | SINGLE VALUE | SUBSCRIPTION


## TIU TEMPLATE LISTOWNR


Function | Return Value | Availability
--- | --- | --- | ---
LISTOWNR^TIUSRVT | ARRAY | SUBSCRIPTION


## TIU TEMPLATE LOCK

Locks Template


Function | Return Value | Availability
--- | --- | --- | ---
LOCK^TIUSRVT2 | SINGLE VALUE<br><br>Returns success of lock. | RESTRICTED


## TIU TEMPLATE PERSONAL OBJECTS

Returns a list or Patient Data Objects allowed in Personal Templates.


Function | Return Value | Availability
--- | --- | --- | ---
PERSOBJS^TIUSRVT2 | ARRAY | RESTRICTED


## TIU TEMPLATE SET DEFAULTS

Saves Template Default Settings


Function | Return Value | Availability
--- | --- | --- | ---
SETDFLT^TIUSRVT2 | SINGLE VALUE | RESTRICTED


## TIU TEMPLATE SET ITEMS

This RPC will create or update the items for a Group, Class, or Root.


Function | Return Value | Availability
--- | --- | --- | ---
SETITEMS^TIUSRVT | ARRAY<br><br>This array indicates the success or failure of each field to file for eachitem. If successful, each array element will contain the subfile entrynumber of the item as filed. If one or more values fail the inputtransforms for their corresponding fields, the corresponding array elementwill have the value 0^ Explanatory message. e.g., SUCCESS(1)="1"SUCCESS(2)="2"SUCCESS(3)="0^ The value 174 does not pass the input transform for field               .02 in subfile 8927.03." | SUBSCRIPTION


## TIU TEMPLATE UNLOCK

Unlocks a template.


Function | Return Value | Availability
--- | --- | --- | ---
UNLOCK^TIUSRVT2 | SINGLE VALUE | RESTRICTED


## TIU UNLOCK RECORD

This RPC will decrement the lock on a given TIU Document Record, identifiedby the TIUDA input parameter. The return value will always be 0.


Function | Return Value | Availability
--- | --- | --- | ---
UNLOCK^TIUSRVP | SINGLE VALUE<br><br>Since decrementing a lock never fails, return value will always be 0. | SUBSCRIPTION


## TIU UPDATE ADDITIONAL SIGNERS

This RPC accepts a list of persons, and adds them as additional signersfor the document identified by the first parameter.


Function | Return Value | Availability
--- | --- | --- | ---
IDSIGNRS^TIULX | SINGLE VALUE<br><br>'^'-delimited String, which includes the DUZ's of the users who weresuccessfully added as additional signers. | SUBSCRIPTION


## TIU UPDATE RECORD

This API updates the record named in the TIUDA parameter, with theinformation contained in the TIUX(Field #) array.  The body of themodified TIU document should be passed in the TIUX("TEXT",i,0) subscript,where i is the line number (i.e., the "TEXT" node should be ready to MERGEwith a word processing field).  Any filing errors which may occur will bereturned in the single valued ERR parameter (which is passed byreference).


Function | Return Value | Availability
--- | --- | --- | ---
UPDATE^TIUSRVP | SINGLE VALUE | SUBSCRIPTION


## TIU USER CLASS LONG LIST

Long List of User Classes


Function | Return Value | Availability
--- | --- | --- | ---
CLSLIST^TIUSRVT1 | ARRAY | RESTRICTED


## TIU USER INACTIVE?

RPC evaluates user's DIUSER status and termination status when selected.Returns 0 if active        1 if inactive


Function | Return Value | Availability
--- | --- | --- | ---
USRINACT^TIUSRVA | SINGLE VALUE<br><br>1 if the user is inactive, 0 if active. | SUBSCRIPTION


## TIU WAS THIS SAVED?

This Boolean Remote Procedure will evaluate whether a given document wascommitted to the database, or whether the user who last edited it wasdisconnected.


Function | Return Value | Availability
--- | --- | --- | ---
SAVED^TIUSRVP1 | SINGLE VALUE<br><br>This Boolean result will be returned TRUE (1) if the document wascommitted to the database successfully. Otherwise, it will return FALSE,with an explanatory message (e.g., "0^You appear to have beendisconnected...") | SUBSCRIPTION


## TIU WHICH SIGNATURE ACTION

This RPC infers whether the user is trying to sign or cosign the docuementin question, and indicates which ASU ACTION the GUI should pass to the TIUAUTHORIZATION RPC.


Function | Return Value | Availability
--- | --- | --- | ---
WHATACT^TIUSRVA | SINGLE VALUE<br><br>Returns a single valued string, indicating whether the client applicationshould pass SIGNATURE or COSIGNATURE to the TIU AUTHORIZATION RPC.  | SUBSCRIPTION


