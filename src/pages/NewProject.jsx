import { Fragment, useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StepInfos from '../components/steps-project/StepInfos';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import StepTeam from '../components/steps-project/StepTeam';
import StepTools from '../components/steps-project/StepTools';
import { useNavigate } from 'react-router-dom';

const steps = ['Infos projet', 'Etapes intermédiaires...', 'Equipe'];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const isStepOptional = (step) => {
    return step === 10;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };
  const navigate = useNavigate();
  const handleReset = () => {
    navigate("/")
  };

  const [form, updateForm] = useState({
    name: '',
    client_id: 1,
    date_start: '',
    date_end: '',
    tools: [],
    team: []
  });
  const stepsComponents = [
    <StepInfos form={form} updateForm={updateForm} />,
    <StepTools form={form} updateForm={updateForm} />,
    <StepTeam />,
  ];
  return (
    <Box
      sx={{
        width: '95%',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
      }}
    >
      <Typography
        variant='h1'
        sx={{
          fontSize: '2rem',
          textAlign: 'center',
          mt: 2,
          mb: 2,
        }}
      >
        Créer un nouveau projet
      </Typography>
      <Stepper activeStep={activeStep} sx={{ mt: 2, mb: 1 }}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant='caption'>Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Box sx={{ mb: 0, minHeight: 'auto' }}>{stepsComponents[activeStep]}</Box>

      {activeStep === steps.length ? (
        <Fragment>
          <Typography
          item
          variant='h3'
          sx={{
            fontSize: '1.5rem',
            fontWeight: '100',
            color: 'gray',
            textAlign: 'center',
            width: '100%',
            mt:2
          }}
        >
          Votre projet a bien été créé.
        </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Retour à l'accueil</Button>
          </Box>
        </Fragment>
      ) : (
        <Fragment>
          {}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              pt: 2,
              pb: 2,
              mb: 4,
              justifyContent: 'center',
              width: '20%',
              marginTop: 'auto',
              alignSelf: 'center',
            }}
          >
            <Button
              color='inherit'
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
              size='large'
              variant='contained'
              startIcon={<ArrowBack />}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color='inherit' onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button
              onClick={handleNext}
              variant='contained'
              size='large'
              endIcon={<ArrowForward />}
            >
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </Fragment>
      )}
    </Box>
  );
}
