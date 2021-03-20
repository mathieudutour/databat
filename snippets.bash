# Get the artisans RGE around a location
curl --request GET --url 'https://koumoul.com/s/data-fair/api/v1/datasets/rge-2/lines?format=json&q_mode=simple&bbox=5.5,48.9,5.6,49.0&select=SIRET%2CNom_de_l'\''entreprise%2CAdresse%2CCode_postal%2CVille%2CDomaine_de_travaux%2CLatitude%2CLongitude'

# Get the cost of a specific work item
curl --request GET \
     --url 'https://koumoul.com/s/data-fair/api/v1/datasets/simul%27aideuros-cout-des-travaux/values_agg?field=code_produit&format=json&metric=avg&metric_field=prix_total&q_mode=simple&code_produit_in=PAC_AE'
(Possible items are PAC_AE, CHAUD_GAZ_COND, FEN_PVC, POELE, ISOLANT_MURS_EXT, PORTE_ENTREE, CHAUD_BIO, FEN_ALU, ISOLANT_COMBLES, PAC_AA, INSERT, ISOLANT_MURS_INT, PORTE_FEN_PVC, ISOLANT_TOIT_INT, CHAUFFE_EAU_THERMO, VOLET, ISOLANT_TOIT_EXT, PORTE_FEN_ALU, FEN_BOIS, VMC_SF_HYGRO, PAN_SOL_PHOTO, ISOLANT_PLANCHER_BAS, PERSIENNE, VMC_DOUBLE_FLUX, PROGRAMMATEUR, AUDIT, CHAUFFE_EAU_SOLAIRE, PAC_EE, PORTE_FEN_BOIS, RAD_CHALEUR_DOUCE, DPE, MOE, PLANCHER_CHAUFF_BT, ISOLANT_TOIT_TERRASSE, CHAUD_FIOUL_COND, AMO, SYSTÈME_SOL_COMBI, SONDE, RACCORDEMENT_RESEAU_CHALEUR, CLIMATISEUR, BRASSEUR_AIR, REFRIGERATEUR, LAVE_LINGE, ECLAIRAGE, REDUCTION_SOLAIRE_TOITURE, CONGELATEUR, PROTECTION_SOLAIRE_OUVRANTS, MARMITE_RIZ, PROTECTION_SOLAIRE_FACADES, POSE_BTC)
